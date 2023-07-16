import { RouteObject } from '../../types';

import Layout from '@/pages/Layout';
import About from '@/pages/About';

const aboutRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/about',
        element: <About />
      }
    ]
  }
];

export default aboutRoutes;