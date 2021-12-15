import {
  authGuard
} from '../helpers/auth';

function loadView(view) {
  return () => import(`../views/${view}.vue`)
}

export default [
  {
    path: '/',
    name: 'HomePage',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    beforeEnter: authGuard,
    component: loadView('Home')
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: authGuard,
    component: loadView('Login')
  },
  {
    path: '/travel',
    name: 'Travel',
    beforeEnter: authGuard,
    component: loadView('Travel')
  },
  {
    path: '/history',
    name: 'History',
    beforeEnter: authGuard,
    component: loadView('History')
  },
];