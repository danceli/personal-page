
export type IMenu = {
  title: string;
  path: string;
  children?: IMenu[]
}
export const MenuConfig: IMenu[] = [
  {
    title: 'Home',
    path: '/home'
  },
  {
    title: 'Algorithms',
    path: '/algorithms',
    children: [
      {
        title: 'Array',
        path: '/algorithms/arary'
      },
      {
        title: 'Binary Search',
        path: '/algorithms/binary-search'
      },
      {
        title: 'List',
        path: '/algorithms/list'
      },
      {
        title: 'Tree',
        path: '/algorithms/tree'
      },
      {
        title: 'Search',
        path: '/algorithms/search'
      },
      {
        title: 'DP',
        path: '/algorithms/dp'
      }
    ]
  },
  {
    title: 'Data Structure',
    path: '/data-structure'
  },
  {
    title: 'Books',
    path: '/books'
  },
  {
    title: 'Life',
    path: '/life'
  },
  {
    title: 'ChatRoom',
    path: '/chat'
  },
  {
    title: 'About',
    path: '/about'
  },
]