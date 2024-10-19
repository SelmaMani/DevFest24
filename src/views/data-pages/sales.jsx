// material-ui
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import EnhancedTable from './table';
import { supabase } from '../../../supabaseClient';
import SalesLineChart from './sales-linechart'; 

export default function SalesData() {
  const [salesRows, setSalesRows] = useState([]);

  const salesHeadCells = [
    { id: 'id', numeric: true, disablePadding: false, label: 'Sale ID' },
    { id: 'product_name', numeric: false, disablePadding: false, label: 'Product Name' },
    { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
    { id: 'amount', numeric: true, disablePadding: false, label: 'Amount' },
    { id: 'sale_date', numeric: false, disablePadding: false, label: 'Sale Date' },
  ];

  const fetchSales = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id;

    const { data: salesData, error: salesError } = await supabase
      .from('sales')
      .select('*')
      .eq('user_id', userId);

    if (salesError) {
      console.error('Error fetching sales data:', salesError);
    } else {
      setSalesRows(salesData);
    }
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <MainCard title="Sales Data">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {salesRows.length > 0 ? (
            <EnhancedTable rows={salesRows} headCells={salesHeadCells} title="Sales" />
          ) : (
            <Typography variant="body2">No data available</Typography>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
        <Box 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          height="100%"
        >
          <SalesLineChart />
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  );
}
