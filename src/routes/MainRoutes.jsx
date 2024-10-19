import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';


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
const SalesData = Loadable(lazy(() => import('views/data-pages/sales')));
const ExpenseData = Loadable(lazy(() => import('views/data-pages/expense')));
const InvestmentData = Loadable(lazy(() => import('views/data-pages/investment')));
const BudgetData = Loadable(lazy(() => import('views/data-pages/budget')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
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
    {
      path: 'data',
      element: <MinimalLayout />,
      children: [
        {
          path: 'sales-data', 
          element: <SalesData />
        },
        {
          path: 'budget-data', 
          element: <BudgetData />
        },
        {
          path: 'investment-data', 
          element: <InvestmentData />
        },
        {
          path: 'expenses-data', 
          element: <ExpenseData />
        }
      ]
    },
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