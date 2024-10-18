import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const BalanceSheet = Loadable(lazy(() => import('views/pages/reports/BalanceSheet')));
const IncomeStatement = Loadable(lazy(() => import('views/pages/reports/IncomeStatement')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const ReportsRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/pages/report/balanceSheet',
      element: <BalanceSheet />
    },
    {
      path: '/pages/report/IncomeStatement',
      element: <IncomeStatement />
    }
  ]
};

export default ReportsRoutes;
