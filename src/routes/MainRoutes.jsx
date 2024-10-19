import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import LandingPage from 'views/landing/LandingPage';


// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// utilities routing
const ExpenseTracking = Loadable(lazy(() => import('views/utilities/Expense-Tracking')));
const FinancialReporting = Loadable(lazy(() => import('views/utilities/Financial-Reporting')));
const InsghitsRecommendations = Loadable(lazy(() => import('views/utilities/Insghits-Recommendations')));
const BalanceSheet = Loadable(lazy(() => import('views/utilities/reports/BalanceSheet')));
const IncomeStatement = Loadable(lazy(() => import('views/utilities/reports/IncomeStatement')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <LandingPage />,
  children: [
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'tracking',
      children: [
        {
          path: 'expense-tracking',
          element: <ExpenseTracking />
        }
      ]
    },
    {
      path: 'tracking',
      element: <MinimalLayout />,
      children: [
        {
          path: 'balance-sheet', 
          element: <BalanceSheet />
        },
        {
          path: 'income-statement', 
          element: <IncomeStatement />
        }
      ]
    },
    {
      path: 'tracking',
      children: [
        {
          path: 'insghits-recommendations',
          element: <InsghitsRecommendations />
        }
      ]
    },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'tabler-icons',
    //       element: <UtilsTablerIcons />
    //     }
    //   ]
    // },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'material-icons',
    //       element: <UtilsMaterialIcons />
    //     }
    //   ]
    // },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;