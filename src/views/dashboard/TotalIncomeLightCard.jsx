import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// supabase client
import { supabase } from '../../../supabaseClient';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: '50%',
    top: -160,
    right: -130,
  },
}));

const CashFlowCard = ({ isLoading }) => {
  const theme = useTheme();
  const [cashFlow, setCashFlow] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const userId = user?.id;
      
      const { data: salesData, error: salesError } = await supabase
        .from('sales')
        .select('amount, price')
        .eq('user_id', userId);; 

      const { data: expensesData, error: expensesError } = await supabase
        .from('expenses')
        .select('amount')
        .eq('user_id', userId);;

      const { data: investmentsData, error: investmentsError } = await supabase
        .from('investments')
        .select('amount')
        .eq('user_id', userId);;

      if (salesError || expensesError || investmentsError) {
        console.error('Error fetching data:', salesError || expensesError || investmentsError);
        return;
      }

      // Calculate total sales revenue
      const salesTotal = salesData.reduce((acc, row) => acc + (row.amount * row.price), 0);
      const expensesTotal = expensesData.reduce((acc, row) => acc + row.amount, 0);
      const investmentsTotal = investmentsData.reduce((acc, row) => acc + row.amount, 0);

      const calculatedCashFlow = salesTotal - expensesTotal + investmentsTotal;
      setCashFlow(calculatedCashFlow);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <TotalIncomeCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2 }}>
            <List sx={{ py: 0 }}>
              <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    sx={{
                      ...theme.typography.commonAvatar,
                      ...theme.typography.largeAvatar,
                      bgcolor: 'warning.light',
                      color: cashFlow >= 0 ? 'success.dark' : 'error.dark',
                    }}
                  >
                    💰 {/* You can replace this with an appropriate cash flow icon */}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{ py: 0, mt: 0.45, mb: 0.45 }}
                  primary={<Typography variant="h4">${cashFlow.toFixed(2)}</Typography>}
                  secondary={
                    <Typography variant="subtitle2" sx={{ color: 'grey.500', mt: 0.5 }}>
                      Cash Flow
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

CashFlowCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default CashFlowCard;
