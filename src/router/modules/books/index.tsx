import { RouteObject } from '../../types';

import Layout from '@/pages/Layout';
import Books from '@/pages/Books';

const booksRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/books',
        element: <Books />
      }
    ]
  }
];

export default booksRoutes;