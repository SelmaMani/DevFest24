import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Papa from 'papaparse';
import { useSession } from '@supabase/auth-helpers-react';
import { supabase } from '../../supabaseClient';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function InputDataDialog() {
    const [open, setOpen] = React.useState(false);
    const session = useSession();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const initialValues = {
        salesFile: null,
        expensesFile: null,
        budgetFile: null,
    };

    const validationSchema = Yup.object({
        salesFile: Yup.mixed().required('A sales file is required').test(
            'fileType',
            'Unsupported File Format',
            (value) => value && value.type === 'text/csv'
        ),
        expensesFile: Yup.mixed().required('An expenses file is required').test(
            'fileType',
            'Unsupported File Format',
            (value) => value && value.type === 'text/csv'
        ),
        budgetFile: Yup.mixed().required('A budget file is required').test(
            'fileType',
            'Unsupported File Format',
            (value) => value && value.type === 'text/csv'
        ),
    });

    const detectAndParseDate = (dateString) => {
        const ddMmYyyyRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
        const yyyyMmDdRegex = /^(\d{4})-(\d{2})-(\d{2})$/;
    
        if (ddMmYyyyRegex.test(dateString)) {
            const [day, month, year] = dateString.split('/');
            return `${year}-${month}-${day}`;
        } else if (yyyyMmDdRegex.test(dateString)) {
            return dateString;
        } else {
            throw new Error(`Invalid date format: ${dateString}. Expected DD/MM/YYYY or YYYY-MM-DD.`);
        }
    };

    const handleSubmit = async (values) => {
        const salesFile = values.salesFile;
        const expensesFile = values.expensesFile;
        const budgetFile = values.budgetFile;

        const processFile = (file, type) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.onload = (event) => {
                    const csvData = event.target.result;

                    // Parse CSV data
                    Papa.parse(csvData, {
                        header: true,
                        skipEmptyLines: true,
                        complete: async (results) => {
                            resolve({ type, data: results.data });
                        },
                    });
                };

                reader.onerror = (error) => reject(error);
                reader.readAsText(file);
            });
        };

        // Process all files
        const salesData = await processFile(salesFile, 'sales');
        const expensesData = await processFile(expensesFile, 'expenses');
        const budgetData = await processFile(budgetFile, 'budget');

        const {
            data: { user },
        } = await supabase.auth.getUser();
        const userId = user?.id;

        if (!userId) {
            console.error('User not logged in or user ID not found');
            return;
        }

        try {
            // Insert sales data into `sales` table
            const { error: salesError } = await supabase
                .from('sales')
                .insert(salesData.data.map((row) => ({
                    user_id: userId,
                    product_name: row.product_name,
                    amount: parseFloat(row.amount),
                    price:  parseFloat(row.price),
                    sale_date: detectAndParseDate(row.sale_date)
                })));

            if (salesError) throw new Error(salesError.message);

            // Insert expenses data into `expenses` table
            const { error: expensesError } = await supabase
                .from('expenses')
                .insert(expensesData.data.map((row) => ({
                    user_id: userId,
                    expense_name: row.expense_name,
                    amount: parseFloat(row.amount),
                    expense_date: detectAndParseDate(row.expense_date)
                })));

            if (expensesError) throw new Error(expensesError.message);

            // Insert budget data into `budgets` table
            const { error: budgetError } = await supabase
                .from('budgets')
                .insert(budgetData.data.map((row) => ({
                    user_id: userId,
                    budget_name: row.budget_name,
                    budget_amount: parseFloat(row.budget_amount),
                    start_date: detectAndParseDate(row.start_date),
                    end_date: detectAndParseDate(row.end_date)
                })));

            if (budgetError) throw new Error(budgetError.message);

            console.log('All data inserted successfully');
        } catch (error) {
            console.error('Error inserting data:', error);
        }

        handleClose(); // Close the dialog after submission
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className='text-xl'>Add your Data</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        In order to visualize your data, please upload your sales, expenses, and budget datasets.
                    </DialogContentText>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ setFieldValue }) => (
                            <Form className='flex flex-col gap-4'>
                                {/* Sales File Upload */}
                                <Button
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload Sales file
                                    <VisuallyHiddenInput
                                        id="salesFile"
                                        name="salesFile"
                                        type="file"
                                        accept='.csv'
                                        onChange={(event) => {
                                            setFieldValue('salesFile', event.currentTarget.files[0]);
                                        }}
                                        multiple
                                    />
                                </Button>
                                <ErrorMessage name="salesFile" component="div" style={{ color: 'red' }} />

                                {/* Expenses File Upload */}
                                <Button
                                    component="label"
                                    variant="contained"
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload Expenses file
                                    <VisuallyHiddenInput
                                        id="expensesFile"
                                        name="expensesFile"
                                        type="file"
                                        accept=".csv"
                                        onChange={(event) => {
                                            setFieldValue('expensesFile', event.currentTarget.files[0]);
                                        }}
                                    />
                                </Button>
                                <ErrorMessage name="expensesFile" component="div" style={{ color: 'red' }} />

                                {/* Budget File Upload */}
                                <Button
                                    component="label"
                                    variant="contained"
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload Budget file
                                    <VisuallyHiddenInput
                                        id="budgetFile"
                                        name="budgetFile"
                                        type="file"
                                        accept=".csv"
                                        onChange={(event) => {
                                            setFieldValue('budgetFile', event.currentTarget.files[0]);
                                        }}
                                    />
                                </Button>
                                <ErrorMessage name="budgetFile" component="div" style={{ color: 'red' }} />

                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type="submit">Upload</Button>
                                </DialogActions>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
