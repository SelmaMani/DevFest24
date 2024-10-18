import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';

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

  const calculateBalanceSheet = () => {
    const totalAssets = calculateTotalAssets();
    const totalLiabilities = calculateTotalLiabilities();
    const totalEquity = calculateTotalEquity();
    const total = totalAssets - (totalLiabilities + totalEquity);
    setResult(total ? `Net Balance: $${total}` : '');
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
        <Button variant="outlined" color="secondary" onClick={() => {}}>
          Export Result
        </Button>
      </Box>

      {/* Notes Section */}
      <Box mt={3}>
        <Typography variant="h6">Notes</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          placeholder="Add any relevant notes here"
        />
      </Box>
    </Box>
  );
}

export default BalanceSheet;
