import { RouteObject } from '../../types';

import Layout from '@/pages/Layout';
import DataStructure from '@/pages/DataStructure';

const dataStructureRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/data-structure',
        element: <DataStructure />
      }
    ]
  }
];

export default dataStructureRoutes;