import { RouteObject } from '../../types';

import Layout from '@/pages/Layout';
import Home from '@/pages/Home';

const homeRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  }
];

export default homeRoutes;