import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import ExportComponent from 'utils/ExportComponent';

function IncomeStatement() {
  const [revenue, setRevenue] = useState('');
  const [costOfGoodsSold, setCostOfGoodsSold] = useState('');
  const [operatingExpenses, setOperatingExpenses] = useState('');
  const [otherIncome, setOtherIncome] = useState('');
  const [taxes, setTaxes] = useState('');

  const [result, setResult] = useState('');
  const [insights, setInsights] = useState("");
  const [exportData, setExportData] = useState([]);

  const calculateGrossProfit = () => {
    return parseFloat(revenue || 0) - parseFloat(costOfGoodsSold || 0);
  };

  const calculateOperatingIncome = () => {
    return calculateGrossProfit() - parseFloat(operatingExpenses || 0);
  };

  const calculateNetIncome = () => {
    return calculateOperatingIncome() + parseFloat(otherIncome || 0) - parseFloat(taxes || 0);
  };

  const calculateIncomeStatement = () => {
    const netIncome = calculateNetIncome();
    setResult(`Net Income: $${netIncome.toFixed(2)}`);

    // Create the data object dynamically from input values
    const data = {
      income_statement_data: {
        revenue: parseFloat(revenue || 0),
        cost_of_goods_sold: parseFloat(costOfGoodsSold || 0),
        gross_profit: calculateGrossProfit(),
        operating_expenses: parseFloat(operatingExpenses || 0),
        operating_income: calculateOperatingIncome(),
        other_income: parseFloat(otherIncome || 0),
        taxes: parseFloat(taxes || 0),
        net_income: netIncome,
      },
      query: "Analyze the income statement result and provide insights on revenue and expenses."
    };

    fetchInsights(data);
    
    const exportData = [
      { Category: 'Revenue', Value: parseFloat(revenue || 0) },
      { Category: 'Cost of Goods Sold', Value: parseFloat(costOfGoodsSold || 0) },
      { Category: 'Gross Profit', Value: calculateGrossProfit() },
      { Category: 'Operating Expenses', Value: parseFloat(operatingExpenses || 0) },
      { Category: 'Operating Income', Value: calculateOperatingIncome() },
      { Category: 'Other Income', Value: parseFloat(otherIncome || 0) },
      { Category: 'Taxes', Value: parseFloat(taxes || 0) },
      { Category: 'Net Income', Value: netIncome },
    ];
    setExportData(exportData);
  };

  const fetchInsights = (data) => {
    fetch('http://127.0.0.1/generate_insights_income', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),  
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Insights:', data.insights);
        setInsights(data.insights);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <Box p={4} bgcolor="white" borderRadius={2} boxShadow={3}>
      <Typography variant="h4" gutterBottom>
        Income Statement Calculator
      </Typography>

      {/* Revenue Section */}
      <Typography variant="h6" gutterBottom>
        Revenue
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Total Revenue"
            variant="outlined"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
      </Grid>

      {/* COGS Section */}
      <Typography variant="h6" gutterBottom mt={4}>
        Cost of Goods Sold
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Cost of Goods Sold"
            variant="outlined"
            value={costOfGoodsSold}
            onChange={(e) => setCostOfGoodsSold(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
      </Grid>

      {/* Operating Expenses Section */}
      <Typography variant="h6" gutterBottom mt={4}>
        Operating Expenses
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Operating Expenses"
            variant="outlined"
            value={operatingExpenses}
            onChange={(e) => setOperatingExpenses(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
      </Grid>

      {/* Other Income Section */}
      <Typography variant="h6" gutterBottom mt={4}>
        Other Income
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Other Income"
            variant="outlined"
            value={otherIncome}
            onChange={(e) => setOtherIncome(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
      </Grid>

      {/* Taxes Section */}
      <Typography variant="h6" gutterBottom mt={4}>
        Taxes
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Taxes"
            variant="outlined"
            value={taxes}
            onChange={(e) => setTaxes(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
      </Grid>

      {/* Calculation Button */}
      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={calculateIncomeStatement}>
          Calculate Income
        </Button>
      </Box>

      {/* Result Display */}
      {result && (
        <Box mt={3}>
          <Typography variant="h6">{result}</Typography>
        </Box>
      )}

      {/* Export Button */}
      <Box mt={3}>
        <ExportComponent data={exportData} fileName={"CustomIncomeStatement"} />
      </Box>

      {/* Insights Section */}
      <div>
        <br />
        <Typography variant="h4">Notes : </Typography>
        <Box
          p={2}
          border={1}
          borderColor="grey.700"
          borderRadius={1}
          bgcolor="grey.200"
          sx={{ whiteSpace: 'pre-line' }}
        >
          <Typography variant="body1">
            {insights ? insights : "No insights available yet."}
          </Typography>
        </Box>
      </div>
    </Box>
  );
}

export default IncomeStatement;
