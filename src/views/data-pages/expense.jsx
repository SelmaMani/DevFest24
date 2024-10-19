// material-ui
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import EnhancedTable from './table';
import { supabase } from '../../../supabaseClient';

export default function ExpensesData() {
  const [expensesRows, setExpensesRows] = useState([]);

  const expensesHeadCells = [
    { id: 'id', numeric: true, disablePadding: false, label: 'Expense ID' },
    { id: 'expense_name', numeric: false, disablePadding: false, label: 'Expense Name' },
    { id: 'amount', numeric: true, disablePadding: false, label: 'Amount' },
    { id: 'expense_date', numeric: false, disablePadding: false, label: 'Expense Date' },
  ];

  const fetchExpenses = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id;

    const { data: expensesData, error: expensesError } = await supabase
      .from('expenses')
      .select('*')
      .eq('user_id', userId);

    if (expensesError) {
      console.error('Error fetching expenses data:', expensesError);
    } else {
      setExpensesRows(expensesData);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <MainCard title="Expenses Data">
      {expensesRows.length > 0 ? (
        <EnhancedTable rows={expensesRows} headCells={expensesHeadCells} title="Expenses" />
      ) : (
        <Typography variant="body2">No data available</Typography>
      )}
    </MainCard>
  );
}
