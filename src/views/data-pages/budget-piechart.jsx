import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { supabase } from '../../../supabaseClient';

export const valueFormatter = (item) => `${item.value}%`;

export default function BudgetPieChart() {
  const [budgetData, setBudgetData] = useState([]);

  const fetchBudgetData = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    const userId = user?.id;

    const { data: budgets, error } = await supabase
      .from('budgets')
      .select('budget_name, budget_amount')
      .eq('user_id', userId);

    if (error) {
      console.error('Error fetching budget data:', error);
    } else {
      const formattedData = budgets.map((budget) => ({
        label: budget.budget_name,
        value: parseFloat(budget.budget_amount),
      }));
      setBudgetData(formattedData);
    }
  };

  useEffect(() => {
    fetchBudgetData();
  }, []);
  const pieParams = {
    height: 200,
    margin: { right: 5 },
    slotProps: { legend: { hidden: true } },
  };

  return (
    <PieChart
      series={[
        {
          data: budgetData, 
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter,
        },
      ]}
      {...pieParams}

    />
  );
}
