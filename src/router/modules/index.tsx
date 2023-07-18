import { Navigate, useRoutes } from 'react-router-dom';
import { RouteObject } from '../types';
import home from './home';
import about from './about';
import chat from './chat';
import books from './books';
import life from './life';
import dataStructure from './datastructure';
import algorithms from './algorithms';

import NotFound from '@/pages/NotFound';

const routeList: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  ...home,
  ...about,
  ...chat,
  ...books,
  ...life,
  ...dataStructure,
  ...algorithms,
  {
    path: '*',
    element: <NotFound />
  }
];

export default () => useRoutes(routeList);