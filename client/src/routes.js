import { ActivePlayers, Auth, History, ListPlayers, Rating } from './pages';

export const authRoutes = [
  {
    path: '/rating',
    component: <Rating/>
  },
  {
    path: '/activePlayers',
    component: <ActivePlayers/>
  },
  {
    path: '/history',
    component: <History/>
  }
];

export const adminRoutes = [
  {
    path: '/rating',
    component: <Rating/>
  },
  {
    path: '/activePlayers',
    component: <ActivePlayers/>
  },
  {
    path: '/history',
    component: <History/>
  },
  {
    path: '/listPlayers',
    component: <ListPlayers/>
  }
];

export const publicRoutes = [
  {
    path: '/',
    component: <Auth/>
  },
  {
    path: '/login',
    component: <Auth/>
  },
  {
    path: '/registration',
    component: <Auth/>
  },
];