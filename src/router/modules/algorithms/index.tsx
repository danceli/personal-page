import { RouteObject } from '../../types';

import Layout from '@/pages/Layout';
import Algorithms from '@/pages/Algorithms';

const algorithmsRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/algorithms',
        element: <Algorithms />
      }
    ]
  }
];

export default algorithmsRoutes;