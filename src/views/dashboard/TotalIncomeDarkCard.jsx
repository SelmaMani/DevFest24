import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import { supabase } from '../../../supabaseClient';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: '50%',
    top: -30,
    right: -180,
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
    borderRadius: '50%',
    top: -160,
    right: -130,
  },
}));

const TotalIncomeDarkCard = ({ isLoading }) => {
  const theme = useTheme();
  const [netProfit, setNetProfit] = useState(0);

  useEffect(() => {
    const fetchFinancialData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      const userId = user?.id;

      // Fetch total revenue from sales
      const { data: salesData, error: salesError } = await supabase
        .from('sales')
        .select('amount, price') // Assuming amount is quantity sold and price is the price per item
        .eq('user_id', userId);

      // Fetch total expenses (assuming you have an expenses table)
      const { data: expensesData, error: expensesError } = await supabase
        .from('expenses')
        .select('amount')
        .eq('user_id', userId);

      if (salesError || expensesError) {
        console.error('Error fetching data:', salesError || expensesError);
        return;
      }

      // Calculate total revenue
      const totalRevenue = salesData.reduce((total, sale) => total + (sale.amount * sale.price), 0);

      // Calculate total expenses
      const totalExpenses = expensesData.reduce((total, expense) => total + expense.amount, 0);

      // Calculate net profit
      const calculatedNetProfit = totalRevenue - totalExpenses;
      setNetProfit(calculatedNetProfit);
    };

    fetchFinancialData();
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
                      bgcolor: 'primary.800',
                      color: '#fff',
                    }}
                  >
                    <TableChartOutlinedIcon fontSize="inherit" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{ py: 0, my: 0.45 }}
                  primary={
                    <Typography variant="h4" sx={{ color: '#fff' }}>
                      ${netProfit.toFixed(2)} {/* Display net profit with two decimal places */}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="subtitle2" sx={{ color: 'primary.light', mt: 0.25 }}>
                      Net Profit
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

TotalIncomeDarkCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalIncomeDarkCard;
