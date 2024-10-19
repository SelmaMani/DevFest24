// material-ui
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import BudgetPieChart from './budget-piechart'; 


// project imports
import MainCard from 'ui-component/cards/MainCard';
import EnhancedTable from './table';
import { supabase } from '../../../supabaseClient';

export const valueFormatter = (item) => `${item.value}%`;


export default function BudgetsData() {
  const [budgetsRows, setBudgetsRows] = useState([]);
  const [budgetData, setBudgetData] = useState([]);


  const budgetsHeadCells = [
    { id: 'id', numeric: true, disablePadding: false, label: 'Budget ID' },
    { id: 'budget_name', numeric: false, disablePadding: false, label: 'Budget Name' },
    { id: 'budget_amount', numeric: true, disablePadding: false, label: 'Allocated Amount' },
    { id: 'start_date', numeric: false, disablePadding: false, label: 'Start Date' },
    { id: 'end_date', numeric: false, disablePadding: false, label: 'End Date' },
  ];

  const fetchBudgets = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id;

    const { data: budgetsData, error: budgetsError } = await supabase
      .from('budgets')
      .select('*')
      .eq('user_id', userId);

    if (budgetsError) {
      console.error('Error fetching budgets data:', budgetsError);
    } else {
      setBudgetsRows(budgetsData);
      const formattedData = budgets.map((budget) => ({
        label: budget.budget_name,
        value: parseFloat(budget.budget_amount),
      }));
      setBudgetData(formattedData);
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  return (
    <MainCard title="Budget Data">
      <Grid container spacing={1}>
        <Grid item xs={10} md={7}>
          {budgetsRows.length > 0 ? (
            <EnhancedTable rows={budgetsRows} headCells={budgetsHeadCells} title="Budgets" />
          ) : (
            <Typography variant="body2">No data available</Typography>
          )}
        </Grid>

        <Grid item xs={12} md={5}>
        <Box 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          height="100%"
        >
          <BudgetPieChart />
        </Box>
        </Grid>
      </Grid>
    </MainCard>
  );
}
