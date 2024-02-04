import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Products from 'views/dashboard/Products';
import Projects from 'views/dashboard/Projects';
import Technical from 'views/dashboard/Technical';
import Financial from 'views/dashboard/Financial';
import Marketing from 'views/dashboard/Marketing';
import HRPage from 'views/dashboard/HR';
import Tasks from 'views/dashboard/Tasks';
import Events from 'views/dashboard/Events';
import Strategy from 'views/dashboard/Strategy';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

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
        },
        {
          path: 'products',
          element: <Products />
        },
        {
          path: 'projects',
          element: <Projects />
        },
        {
          path: 'technical',
          element: <Technical />
        },
        {
          path: 'financial',
          element: <Financial />
        },
        {
          path: 'marketing',
          element: <Marketing />
        },
        {
          path: 'hr',
          element: <HRPage />
        },
        {
          path: 'tasks',
          element: <Tasks />
        },
        {
          path: 'events',
          element: <Events />
        },
        {
          path: 'strategy',
          element: <Strategy />
        }
      ]
    }
  ]
};

export default MainRoutes;
