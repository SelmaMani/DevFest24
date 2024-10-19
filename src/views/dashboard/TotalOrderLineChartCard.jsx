import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chart from 'react-apexcharts';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { supabase } from '../../../supabaseClient';

const TotalOrderLineChartCard = ({ isLoading }) => {
  const theme = useTheme();
  const [salesData, setSalesData] = useState([]);
  const [timeValue, setTimeValue] = useState(false); // false for year, true for month

  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };

  useEffect(() => {
    const fetchSalesData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const userId = user?.id;

      const { data, error } = await supabase
        .from('sales')
        .select('sale_date, amount, price')
        .eq('user_id', userId);

      if (error) {
        console.error('Error fetching sales data:', error);
      } else {
        setSalesData(data);
      }
    };

    fetchSalesData();
  }, []);

  // Function to format sales data for the chart based on the selected time frame
  const formatChartData = (data) => {
    const seriesData = {};
    const labels = [];
    const currentDate = new Date();

    data.forEach((item) => {
      const date = new Date(item.sale_date);
      const amount = item.amount;
      const price = item.price;
      const totalSale = amount * price;

      if (timeValue) {
        // Monthly view: daily sales for the current month
        if (date.getFullYear() === currentDate.getFullYear() && date.getMonth() === currentDate.getMonth()) {
          const day = date.getDate();
          const label = `${day} ${date.toLocaleString('default', { month: 'long' })}`;
          if (!seriesData[label]) {
            seriesData[label] = 0;
          }
          seriesData[label] += totalSale;
        }
      } else {
        // Yearly view (aggregating by month)
        const year = date.getFullYear();
        const month = date.toLocaleDateString('default', { month: 'long' });
        const label = `${month} ${year}`;
        if (!seriesData[label]) {
          seriesData[label] = 0;
        }
        seriesData[label] += totalSale;
      }
    });

    // Convert seriesData object to arrays for labels and series
    Object.keys(seriesData).forEach((key) => {
      labels.push(key);
    });

    return {
      labels,
      seriesData: Object.values(seriesData),
    };
  };

  const { labels, seriesData } = formatChartData(salesData);
  const totalSales = seriesData.reduce((total, amount) => total + amount, 0).toFixed(2);

  const chartData = {
    type: 'line',
    height: 90,
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#fff'],
      fill: {
        type: 'solid',
        opacity: 1,
      },
      stroke: {
        curve: 'smooth',
        width: 3,
      },
      xaxis: {
        categories: labels,
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: true,
        },
      },
    },
    series: [
      {
        name: 'Total Sales',
        data: seriesData,
      },
    ],
  };

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <MainCard
          border={false}
          content={false}
          sx={{
            bgcolor: 'primary.dark',
            color: '#fff',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        bgcolor: 'primary.800',
                        color: '#fff',
                        mt: 1,
                      }}
                    >
                      <LocalMallOutlinedIcon fontSize="inherit" />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Button
                      disableElevation
                      variant={timeValue ? 'contained' : 'text'}
                      size="small"
                      sx={{ color: 'inherit' }}
                      onClick={(e) => handleChangeTime(e, true)} // Month view
                    >
                      Month
                    </Button>
                    <Button
                      disableElevation
                      variant={!timeValue ? 'contained' : 'text'}
                      size="small"
                      sx={{ color: 'inherit' }}
                      onClick={(e) => handleChangeTime(e, false)} // Year view
                    >
                      Year
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center">
                  <Grid item xs={6}>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mt: 1.75, mb: 0.75 }}>
                      ${totalSales}
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', fontWeight: 500, color: 'primary.200' }}>
                      Total Order
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Chart {...chartData} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </MainCard>
      )}
    </>
  );
};

TotalOrderLineChartCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalOrderLineChartCard;
