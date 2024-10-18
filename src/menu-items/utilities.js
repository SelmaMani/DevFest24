// assets
import { IconTypography, IconPalette,IconReportMoney, IconHomeStats,IconTrendingUp,IconChartHistogram, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconChartHistogram,
  IconReportMoney,
  IconHomeStats
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'tracking',
  title: 'Tracking',
  type: 'group',
  children: [
    {
      id: 'expense-tracking',
      title: 'Expense Tracking',
      type: 'item',
      url: '/tracking/expense-tracking',
      icon: icons.IconChartHistogram,
      breadcrumbs: false
    },
    {
      id: 'financial-reporting',
      title: 'Financial Reporting',
      type: 'item',
      url: '/tracking/financial-reporting',
      icon: icons.IconReportMoney,
      breadcrumbs: false
    },
    {
      id: 'insights-recommendations',
      title: 'Insights & Recommendations',
      type: 'item',
      url: '/tracking/insghits-recommendations',
      icon: icons.IconHomeStats,
      breadcrumbs: false
    }
  ]
};

export default utilities;
