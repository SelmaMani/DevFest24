import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

// material-ui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { supabase } from '../../../supabaseClient';


// project imports
import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Box } from '@mui/system';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [data, setData] = useState();
  const [insights, setInsights] = useState("");



  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const userId = user?.id;

      const { data: salesData, error: salesError } = await supabase
        .from('sales')
        .select('amount, price, sale_date')
        .eq('user_id', userId);;

      const { data: expensesData, error: expensesError } = await supabase
        .from('expenses')
        .select('amount, expense_date')
        .eq('user_id', userId);;

      const { data: investmentsData, error: investmentsError } = await supabase
        .from('investments')
        .select('amount, investment_date')
        .eq('user_id', userId);

      const { data: budgetData, error: budgetError } = await supabase
        .from('budgets')
        .select('budget_amount, start_date')
        .eq('user_id', userId);

      if (salesError || expensesError || investmentsError) {
        console.error('Error fetching data:', salesError || expensesError || investmentsError || budgetError);
        return;
      }

      const data = {
        dashboard_data: {
          investmentsData: investmentsData,
          budgetData: budgetData,
          expensesData: expensesData,
          salesData: salesData
        },
        query: "Analyze the dashboard data and provide business insights on different KPI metrics."
      };
      setData(data);
      console.log(data);
      fetchInsights(data);

    };
    fetchData();
  }, []);

  const fetchInsights = (data) => {
    fetch('http://localhost:80/dashboard_report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h4">Financial Report</Typography>
                  </Grid>
                  <Grid item>
                    <MoreHorizOutlinedIcon
                      fontSize="small"
                      sx={{
                        color: 'primary.200',
                        cursor: 'pointer'
                      }}
                      aria-controls="menu-popular-card"
                      aria-haspopup="true"
                      onClick={handleClick}
                    />
                    <Menu
                      id="menu-popular-card"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      variant="selectedMenu"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                    >
                      <MenuItem onClick={handleClose}> Today</MenuItem>
                      <MenuItem onClick={handleClose}> This Month</MenuItem>
                      <MenuItem onClick={handleClose}> This Year </MenuItem>
                    </Menu>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
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
              </Grid>
            </Grid>
          </CardContent>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PopularCard;
