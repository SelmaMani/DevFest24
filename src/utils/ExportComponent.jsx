import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import { CSVLink } from 'react-csv';


import 'jspdf-autotable';  // Import the plugin


const ExportComponent = ({ data, fileName }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // Open menu on button click
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    const headers = Object.keys(data[0]);
    const rows = data.map((item) => Object.values(item));

    doc.text(fileName, 20, 10);
    doc.autoTable({
      head: [headers],
      body: rows,
    });
    doc.save(`${fileName}.pdf`);
    handleClose();
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
      >
        Export
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={exportToPDF}>Export to PDF</MenuItem>
        <MenuItem onClick={exportToExcel}>Export to Excel</MenuItem>
        <MenuItem>
          <CSVLink
            data={data}  // Use the data directly here
            filename={`${fileName}.csv`}
            style={{ textDecoration: 'none', color: 'inherit' }}
            onClick={handleClose}
          >
            Export to CSV
          </CSVLink>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ExportComponent;

