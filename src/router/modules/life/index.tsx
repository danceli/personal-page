import { RouteObject } from '../../types';

import Layout from '@/pages/Layout';
import Life from '@/pages/Life';

const lifeRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/life',
        element: <Life />
      }
    ]
  }
];

export default lifeRoutes;