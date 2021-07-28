import { IRoute } from 'umi-types';

export default [
  {
    path: '/',
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: './home' },
      { path: '/about', component: './about' },
      { path: '/cases', component: './cases' },
      { path: '/contact', component: './contact' },
      { path: '/news', component: './news' },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
] as IRoute[];
