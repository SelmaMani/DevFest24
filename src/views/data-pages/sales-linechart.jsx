import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { supabase } from '../../../supabaseClient';

// Example dataset structure
const salesDataTemplate = [
  { year: 2022, total: 0 },
  { year: 2023, total: 0 },
  { year: 2024, total: 0 },
];

export default function SalesLineChart() {
  const [salesDataset, setSalesDataset] = useState(salesDataTemplate);

  const fetchSalesData = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id;

    const { data: salesRows, error } = await supabase
      .from('sales')
      .select('sale_date, amount')
      .eq('user_id', userId);

    if (error) {
      console.error('Error fetching sales data:', error);
      return;
    }

    // Initialize dataset
    const dataset = salesDataTemplate.map(item => ({ ...item }));

    // Populate dataset with actual sales amounts
    salesRows.forEach(sale => {
      const saleYear = new Date(sale.sale_date).getFullYear();
      const yearData = dataset.find(data => data.year === saleYear);
      if (yearData) {
        yearData.total += parseFloat(sale.amount);
      }
    });

    setSalesDataset(dataset);
  };

  useEffect(() => {
    fetchSalesData();
  }, []);

  return (
    <LineChart
      xAxis={[
        {
          dataKey: 'year',
          valueFormatter: (value) => value.toString(),
          min: 2022, 
          max: 2024,
        },
      ]}
      series={[
        {
          dataKey: 'total',
          label: 'Sales Total',
          showMark: true,
          stack: 'total', 
          area: false, 
        },
      ]}
      dataset={salesDataset}
      height={300}
      margin={{ top: 5 }}
      legend={{ hidden: true }}
      grid={{ vertical: true, horizontal: true }}

    />
  );
}
