import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Papa from 'papaparse';
import { useSession } from '@supabase/auth-helpers-react';
import { supabase } from '../../supabaseClient';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import TableContent from './table-content';
import Box from '@mui/material/Box';


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

const columnDefinitions = {
    Sales: [
        { '#column': 'product_name', Type: 'text' },
        { '#column': 'amount', Type: 'decimal' },
        { '#column': 'price', Type: 'float' },
        { '#column': 'sale_date', Type: 'date' },
    ],
    Expenses: [
        { '#column': 'expense_name', Type: 'text' },
        { '#column': 'amount', Type: 'decimal' },
        { '#column': 'expense_date', Type: 'date' },
    ],
    Investments: [
        { '#column': 'description', Type: 'text' },
        { '#column': 'amount', Type: 'decimal' },
        { '#column': 'investment_date', Type: 'date' },
    ],
    Budget: [
        { '#column': 'budget_name', Type: 'budget_name' },
        { '#column': 'budget_amount', Type: 'budget_amount' },
        { '#column': 'start_date', Type: 'date' },
        { '#column': 'end_date (optional)', Type: 'date' },
    ],
};
const headers = ['#column', 'Type'];

export default function UploadDropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [fileType, setFileType] = React.useState('');
    const session = useSession();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleClickOpen = (type) => {
        setFileType(type);
        setOpen(true);
        handleCloseMenu();
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    const initialValues = {
        file: null,
    };

    const validationSchema = Yup.object({
        file: Yup.mixed().required('A file is required').test(
            'fileType',
            'Unsupported File Format',
            (value) => value && value.type === 'text/csv'
        ),
    });

    const handleSubmit = async (values) => {
        const file = values.file;

        const processFile = (file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.onload = (event) => {
                    const csvData = event.target.result;

                    // Parse CSV data
                    Papa.parse(csvData, {
                        header: true,
                        skipEmptyLines: true,
                        complete: async (results) => {
                            resolve(results.data);
                        },
                    });
                };

                reader.onerror = (error) => reject(error);
                reader.readAsText(file);
            });
        };

        try {
            const data = await processFile(file);

            const {
                data: { user },
            } = await supabase.auth.getUser();
            const userId = user?.id;

            if (!userId) {
                console.error('User not logged in or user ID not found');
                return;
            }

            switch (fileType) {
                case 'Sales':
                    await supabase
                        .from('sales')
                        .insert(data.map((row) => ({
                            user_id: userId,
                            product_name: row.product_name,
                            amount: parseFloat(row.amount),
                            price: parseFloat(row.price),
                            sale_date: row.sale_date,
                        })));
                    break;
                case 'Expenses':
                    await supabase
                        .from('expenses')
                        .insert(data.map((row) => ({
                            user_id: userId,
                            expense_name: row.expense_name,
                            amount: parseFloat(row.amount),
                            expense_date: row.expense_date,
                        })));
                    break;
                case 'Investments':
                    await supabase
                        .from('investments')
                        .insert(data.map((row) => ({
                            user_id: userId,
                            investment_name: row.investment_name,
                            amount: parseFloat(row.amount),
                            investment_date: row.investment_date,
                        })));
                    break;
                case 'Budget':
                    await supabase
                        .from('budgets')
                        .insert(data.map((row) => ({
                            user_id: userId,
                            budget_name: row.budget_name,
                            budget_amount: parseFloat(row.budget_amount),
                            start_date: row.start_date,
                            end_date: row.end_date,
                        })));
                    break;
                default:
                    console.error('Unknown file type');
            }

            console.log('Data inserted successfully');
        } catch (error) {
            console.error('Error processing file:', error);
        }

        handleCloseDialog();
    };

    return (
        <React.Fragment>
            <Button variant="contained" color="secondary" onClick={handleClick}>
                Upload Data
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
                <MenuItem onClick={() => handleClickOpen('Sales')}>Add Sales</MenuItem>
                <MenuItem onClick={() => handleClickOpen('Expenses')}>Add Expenses</MenuItem>
                <MenuItem onClick={() => handleClickOpen('Investments')}>Add Investments</MenuItem>
                <MenuItem onClick={() => handleClickOpen('Budget')}>Add Budget</MenuItem>
            </Menu>
            <Dialog fullWidth={true}
                maxWidth="sm"
                open={open} onClose={handleCloseDialog}>
                <DialogTitle className='text-xl'>Add {fileType}</DialogTitle>
                <DialogContent className='flex flex-col gap-4'>
                    <DialogContentText id="alert-dialog-description">
                        To ensure the best experience while uploading your data, please follow the outlined guidelines for the required data structure. For additional customization options, check out our premium features! Thank you for your cooperation!
                    </DialogContentText>
                    <div className="flex justify-center gap-4">
                        <TableContent
                            data={columnDefinitions[fileType] || []}
                            headers={['#column', 'Type']}
                        />
                       
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ setFieldValue }) => (
                                    <Form>
                                         <Box component="section" sx={{
                            width: 260,
                            height: 260,
                            p: 2, border: '1px black',
                            borderRadius: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            bgcolor: 'primary.light',
                            '&:hover': {
                                bgcolor: 'primary.light',
                            },
                        }}>
                                        <Button
                                            component="label"
                                            startIcon={<CloudUploadIcon />}
                                            sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                                        >
                                            Upload {fileType} file
                                            <VisuallyHiddenInput
                                                id="file"
                                                name="file"
                                                type="file"
                                                accept=".csv"
                                                onChange={(event) => {
                                                    setFieldValue('file', event.currentTarget.files[0]);
                                                }}
                                            />
                                        </Button>
                                        </Box>
                                        <ErrorMessage name="file" component="div" style={{ color: 'red' }} />
                                        <DialogActions>
                                            <Button onClick={handleCloseDialog}>Cancel</Button>
                                            <Button type="submit">Upload</Button>
                                        </DialogActions>
                                    </Form>
                                )}
                            </Formik>
                     
                    </div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
