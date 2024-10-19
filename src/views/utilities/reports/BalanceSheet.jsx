import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import ExportComponent from 'utils/ExportComponent';
import { data } from 'autoprefixer';

function BalanceSheet() {
  const [cash, setCash] = useState('');
  const [accountsReceivable, setAccountsReceivable] = useState('');
  const [inventory, setInventory] = useState('');
  const [otherAssets, setOtherAssets] = useState('');

  const [shortTermLiabilities, setShortTermLiabilities] = useState('');
  const [longTermLiabilities, setLongTermLiabilities] = useState('');
  const [otherLiabilities, setOtherLiabilities] = useState('');

  const [ownersEquity, setOwnersEquity] = useState('');
  const [retainedEarnings, setRetainedEarnings] = useState('');
  const [otherEquity, setOtherEquity] = useState('');

  const [result, setResult] = useState('');
  const [insights, setInsights] = useState("");

  const [exportData, setExportData] = useState([]);


  const calculateTotalAssets = () => {
    return (
      parseFloat(cash || 0) +
      parseFloat(accountsReceivable || 0) +
      parseFloat(inventory || 0) +
      parseFloat(otherAssets || 0)
    );
  };

  const calculateTotalLiabilities = () => {
    return (
      parseFloat(shortTermLiabilities || 0) +
      parseFloat(longTermLiabilities || 0) +
      parseFloat(otherLiabilities || 0)
    );
  };

  const calculateTotalEquity = () => {
    return (
      parseFloat(ownersEquity || 0) +
      parseFloat(retainedEarnings || 0) +
      parseFloat(otherEquity || 0)
    );
  };

  var totalAssets = 0;
  var totalLiabilities = 0;
  var totalEquity = 0;
  var total = 0;

  const calculateBalanceSheet = () => {
    
     totalAssets = calculateTotalAssets();
     totalLiabilities = calculateTotalLiabilities();
     totalEquity = calculateTotalEquity();
     total = totalAssets - (totalLiabilities + totalEquity);
    setResult(`Net Balance: $${total}`);

    // Create the data object dynamically from input values
    const data = {
      balance_sheet_data: {
        assets: {
          cash: parseFloat(cash || 0),
          accounts_receivable: parseFloat(accountsReceivable || 0),
          inventory: parseFloat(inventory || 0),
          other_assets: parseFloat(otherAssets || 0),
          total_assets: totalAssets  // Calculated total assets
        },
        liabilities: {
          short_term_debt: parseFloat(shortTermLiabilities || 0),
          long_term_debt: parseFloat(longTermLiabilities || 0),
          other_liabilities: parseFloat(otherLiabilities || 0),
          total_liabilities: totalLiabilities  // Calculated total liabilities
        },
        equity: {
          owners_equity: parseFloat(ownersEquity || 0),
          retained_earnings: parseFloat(retainedEarnings || 0),
          other_equity: parseFloat(otherEquity || 0),
          total_equity: totalEquity  // Calculated total equity
        },
        result: total  // Final net balance
      },
      query: "Analyze the balance sheet result and provide insights on asset-to-debt ratio."
    };

    fetchInsights(data);
    const exportData = [
      { Category: 'Assets', Value: totalAssets },
      { Category: 'Liabilities', Value: totalLiabilities },
      { Category: 'Equity', Value: totalEquity },
      { Category: 'Net Balance', Value: total },
    ];
    console.log(exportData);
    setExportData(exportData);

  };

  const fetchInsights = (data) => {
    fetch('http://127.0.0.1/generate_insights', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),  // Send data from the inputs in the request body
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Insights:', data.insights);

        // Update state with received insights
        setInsights(data.insights);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Box p={4} bgcolor="white" borderRadius={2} boxShadow={3}>
      <Typography variant="h4" gutterBottom>
        Balance Sheet Calculator
      </Typography>

      {/* Assets Section */}
      <Typography variant="h6" gutterBottom>
        Assets
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Cash"
            variant="outlined"
            value={cash}
            onChange={(e) => setCash(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Accounts Receivable"
            variant="outlined"
            value={accountsReceivable}
            onChange={(e) => setAccountsReceivable(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Inventory"
            variant="outlined"
            value={inventory}
            onChange={(e) => setInventory(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Other Assets"
            variant="outlined"
            value={otherAssets}
            onChange={(e) => setOtherAssets(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
      </Grid>

      <Box mt={3}>
        <Typography variant="h6">
          Total Assets: ${calculateTotalAssets()}
        </Typography>
      </Box>

      {/* Liabilities Section */}
      <Typography variant="h6" gutterBottom mt={4}>
        Liabilities
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Short-Term Liabilities"
            variant="outlined"
            value={shortTermLiabilities}
            onChange={(e) => setShortTermLiabilities(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Long-Term Liabilities"
            variant="outlined"
            value={longTermLiabilities}
            onChange={(e) => setLongTermLiabilities(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Other Liabilities"
            variant="outlined"
            value={otherLiabilities}
            onChange={(e) => setOtherLiabilities(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
      </Grid>

      <Box mt={3}>
        <Typography variant="h6">
          Total Liabilities: ${calculateTotalLiabilities()}
        </Typography>
      </Box>

      {/* Equity Section */}
      <Typography variant="h6" gutterBottom mt={4}>
        Equity
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Owner's Equity"
            variant="outlined"
            value={ownersEquity}
            onChange={(e) => setOwnersEquity(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Retained Earnings"
            variant="outlined"
            value={retainedEarnings}
            onChange={(e) => setRetainedEarnings(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Other Equity"
            variant="outlined"
            value={otherEquity}
            onChange={(e) => setOtherEquity(e.target.value)}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
      </Grid>

      <Box mt={3}>
        <Typography variant="h6">
          Total Equity: ${calculateTotalEquity()}
        </Typography>
      </Box>

      {/* Calculation Button */}
      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={calculateBalanceSheet}>
          Calculate Balance
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
        <ExportComponent data={ exportData } fileName={"BalanceSheetData"} />
      </Box>


      {/* Notes Section */}
        <div>
        <br />
        <Typography variant="h4">Notes : </Typography>
       
          <Box
          p={2}
          border={1}
          borderColor="grey.600"
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

export default BalanceSheet;
