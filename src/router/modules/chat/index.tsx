import { RouteObject } from '../../types';

import Layout from '@/pages/Layout';
import Chat from '@/pages/Chat';

const chatRoutes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/chat',
        element: <Chat />
      }
    ]
  }
];

export default chatRoutes;