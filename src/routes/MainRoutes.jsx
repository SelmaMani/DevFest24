import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// utilities routing
const ExpenseTracking = Loadable(lazy(() => import('views/utilities/Expense-Tracking')));
const FinancialReporting = Loadable(lazy(() => import('views/utilities/Financial-Reporting')));
const InsghitsRecommendations = Loadable(lazy(() => import('views/utilities/Insghits-Recommendations')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

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
      children: [
        {
          path: 'financial-reporting',
          element: <FinancialReporting />
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
