import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { supabase } from '../../../supabaseClient';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// chart data
const initialChartData = {
  height: 480,
  type: 'bar',
  options: {
    chart: {
      id: 'bar-chart',
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
      },
    },
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    legend: {
      show: true,
      fontFamily: `'Roboto', sans-serif`,
      position: 'bottom',
      offsetX: 20,
      labels: {
        useSeriesColors: false,
      },
      markers: {
        width: 16,
        height: 16,
        radius: 5,
      },
      itemMargin: {
        horizontal: 15,
        vertical: 8,
      },
    },
    fill: {
      type: 'solid',
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
    },
  },
  series: [],
};

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //

const TotalGrowthBarChart = ({ isLoading }) => {
  const [value, setValue] = React.useState('today');
  const [chartData, setChartData] = useState(initialChartData);
  const theme = useTheme();

  const status = [
    {
      value: 'today',
      label: 'Today'
    },
    {
      value: 'month',
      label: 'This Month'
    },
    {
      value: 'year',
      label: 'This Year'
    }
  ];


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

      const monthlyData = {
        investment: new Array(12).fill(0),
        loss: new Array(12).fill(0),
        profit: new Array(12).fill(0),
        maintenance: new Array(12).fill(0),
      };
      
      // Calculate total sales profit
      salesData.forEach((sale) => {
        const month = new Date(sale.sale_date).getMonth();
        if (!isNaN(month)) {
          monthlyData.profit[month] += sale.amount * sale.price; // Total profit from sales
        }
      });
      
      // Calculate total expenses
      const monthlyExpenses = new Array(12).fill(0);
      expensesData.forEach((expense) => {
        const month = new Date(expense.expense_date).getMonth();
        if (!isNaN(month)) {
          monthlyExpenses[month] += expense.amount; // Total expenses
        }
      });
      
      // Calculate loss based on budget and expenses
      const monthlyBudget = new Array(12).fill(0);
      budgetData.forEach((budget) => {
        const month = new Date(budget.start_date).getMonth();
        if (!isNaN(month)) {
          monthlyBudget[month] += budget.budget_amount; // Total budget per month
        }
      });
      
      monthlyData.loss.forEach((_, index) => {
        if (monthlyExpenses[index] > monthlyBudget[index]) {
          monthlyData.loss[index] = monthlyExpenses[index] - monthlyBudget[index]; // Loss as the excess over budget
        } else {
          monthlyData.loss[index] = 0; // No loss if within budget
        }
      });
      
      // Calculate total investments
      investmentsData.forEach((investment) => {
        const month = new Date(investment.investment_date).getMonth();
        if (!isNaN(month)) {
          monthlyData.investment[month] += investment.amount; // Total investments
        }
      });
      
      console.log('Monthly Data:', monthlyData);

      setChartData((prev) => ({
        ...prev,
        series: [
          {
            name: 'Investment',
            data: monthlyData.investment,
          },
          {
            name: 'Loss',
            data: monthlyData.loss,
          },
          {
            name: 'Profit',
            data: monthlyData.profit,
          },
          {
            name: 'Maintenance',
            data: monthlyData.maintenance,
          },
        ],
      }));
      console.log('Chart Series:', chartData.series);

    };

    fetchData();
  }, []);

  const { primary } = theme.palette.text;
  const divider = theme.palette.divider;
  const grey500 = theme.palette.grey[500];

  const primary200 = theme.palette.primary[200];
  const primaryDark = theme.palette.primary.dark;
  const secondaryMain = theme.palette.secondary.main;
  const secondaryLight = theme.palette.secondary.light;

  React.useEffect(() => {
    const newChartData = {
      ...chartData.options,
      colors: [primary200, primaryDark, secondaryMain, secondaryLight],
      xaxis: {
        labels: {
          style: {
            colors: Array(12).fill(primary),
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: [primary],
          },
        },
      },
      grid: { borderColor: divider },
      tooltip: { theme: 'light' },
      legend: { labels: { colors: grey500 } },
    };

    // do not load chart when loading
    if (!isLoading) {
      ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
    }
  }, [primary200, primaryDark, secondaryMain, secondaryLight, primary, divider, isLoading, grey500]);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography variant="subtitle2">Total Growth</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">${chartData.series.reduce((acc, cur) => acc + cur.data.reduce((a, b) => a + b, 0), 0).toFixed(2)}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField id="standard-select-currency" select value={value} onChange={(e) => setValue(e.target.value)}>
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                '& .apexcharts-menu.apexcharts-menu-open': {
                  bgcolor: 'background.paper',
                },
              }}
            >
              <Chart {...chartData} />
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

TotalGrowthBarChart.propTypes = {
  isLoading: PropTypes.bool,
};

export default TotalGrowthBarChart;
