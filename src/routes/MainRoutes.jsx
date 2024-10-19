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
const SalesData = Loadable(lazy(() => import('views/data-pages/sales')));
const ExpenseData = Loadable(lazy(() => import('views/data-pages/expense')));
const InvestmentData = Loadable(lazy(() => import('views/data-pages/investment')));
const BudgetData = Loadable(lazy(() => import('views/data-pages/budget')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <LandingPage /> // Landing page route
    },
    {
      path: 'dashboard',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <DashboardDefault />
        },
      ]
    },
    {
      path: 'tracking',
      element: <MainLayout />,
      children: [
        {
          path: '/tracking',
          children: [
            {
              path: 'expense-tracking',
              element: <ExpenseTracking />
            },
            {
              path: 'balance-sheet',
              element: <BalanceSheet />
            },
            {
              path: 'income-statement',
              element: <IncomeStatement />
            },
            {
              path: 'insghits-recommendations',
              element: <InsghitsRecommendations />
            }
          ]
        }]
    },
    {
      path: 'data',
      element: <MainLayout />,
      children: [
        {
          path: '/data',
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
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
