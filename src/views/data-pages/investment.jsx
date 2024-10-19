// material-ui
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import EnhancedTable from './table';
import { supabase } from '../../../supabaseClient';

export default function InvestmentData() {
  const [investmentRows, setInvestmentRows] = useState([]);

  const investmentsHeadCells = [
    { id: 'id', numeric: true, disablePadding: false, label: 'Investment ID' },
    { id: 'description', numeric: false, disablePadding: false, label: 'Description' },
    { id: 'amount', numeric: true, disablePadding: false, label: 'Amount' },
    { id: 'investment_date', numeric: false, disablePadding: false, label: 'Investment Date' },
  ];

  const fetchInvestment = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id;

    const { data: investmentsData, error: investmentError } = await supabase
      .from('investments')
      .select('*')
      .eq('user_id', userId);

    if (investmentError) {
      console.error('Error fetching investment data:', investmentError);
    } else {
      setInvestmentRows(investmentsData);
    }
  };

  useEffect(() => {
    fetchInvestment();
  }, []);

  return (
    <MainCard title="Investment Data">
      {investmentRows.length > 0 ? (
        <EnhancedTable rows={investmentRows} headCells={investmentsHeadCells} title="Investments" />
      ) : (
        <Typography variant="body2">No data available</Typography>
      )}
    </MainCard>
  );
}
