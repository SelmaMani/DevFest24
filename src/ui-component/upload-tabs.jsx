import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
    Box,
    Button,
    DialogActions,
} from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import TableContent from './table-content';

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
        { '#column': 'budget_name', Type: 'text' },
        { '#column': 'budget_amount', Type: 'decimal' },
        { '#column': 'start_date', Type: 'date' },
        { '#column': 'end_date (optional)', Type: 'date' },
    ],
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const FileUploadSection = ({ fileType, onSubmit }) => (
    <div className="flex justify-center gap-4">
                <TableContent
                    data={columnDefinitions[fileType]}
                    headers={['#column', 'Type']}
                />
    <Formik
        initialValues={{ file: null }}
        validationSchema={Yup.object({
            file: Yup.mixed().required('A file is required').test(
                'fileType',
                'Unsupported File Format',
                (value) => value && value.type === 'text/csv'
            ),
        })}
        onSubmit={onSubmit}
    >
        {({ setFieldValue }) => (
            <Form>
                <Box component="section" sx={{
                    width: 260,
                    height: 260,
                    p: 2,
                    border: '1px black',
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
                    <Button type="submit">Upload</Button>
                </DialogActions>
            </Form>
        )}
    </Formik>
    </div>
);

export default function UploadTabs({ setFileType, handleSubmit }) {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                setFileType('Sales');
                break;
            case 1:
                setFileType('Expenses');
                break;
            case 2:
                setFileType('Investments');
                break;
            case 3:
                setFileType('Budget');
                break;
            default:
                setFileType('');
        }
    };

    return (
        <Box sx={{ bgcolor: 'background.paper'}}>
            <AppBar position="static">
                <Box sx={{ borderBottom: 1, borderColor: 'grey.200' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor=""
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    sx={{ backgroundColor: 'grey.700', color: 'black', '&:hover': { backgroundColor: 'grey.700' } }}
                >
                    <Tab label="Sales" {...a11yProps(0)} sx={{ color:'white', backgroundColor: 'grey.500',  '&:hover': { bgcolor: 'grey.700' } }} />
                    <Tab label="Expenses" {...a11yProps(1)} sx={{color:'white',  backgroundColor: 'grey.500', '&:hover': { bgcolor: 'grey.700' } }} />
                    <Tab label="Investments" {...a11yProps(2)} sx={{ color:'white', backgroundColor: 'grey.500', '&:hover': { bgcolor: 'grey.700' } }} />
                    <Tab label="Budget" {...a11yProps(3)} sx={{ color:'white', backgroundColor: 'grey.500','&:hover': { bgcolor: 'grey.700' } }} />
                </Tabs>
                </Box>
            </AppBar>
            <TabPanel value={value} index={0} dir={theme.direction}>
                <FileUploadSection fileType="Sales" onSubmit={handleSubmit} />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <FileUploadSection fileType="Expenses" onSubmit={handleSubmit} />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <FileUploadSection fileType="Investments" onSubmit={handleSubmit} />
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
                <FileUploadSection fileType="Budget" onSubmit={handleSubmit} />
            </TabPanel>
        </Box>
    );
}
