//page
import { NKTable, HKTable } from '~/page/Table';
import { HKForm, NKForm } from '~/page/Form';
import DashboardComponent from '~/page/Dashboard';
import Authentication from '~/page/Authentication';
import Profile from '~/page/Account';
import Start from '~/page/StartPage';
import Notification from '~/page/Notification';
// import ErrorLogin from '~/page/Error'
//layout
import DefaultLayout from '~/components/Layout/DefaultLayout'
import AuthenticationLayout from '~/components/Layout/AuthenticationLayout'

const routes = [
    // { path: '/dashboard', element: DashboardComponent, layout: DefaultLayout, id: 'db' },
    {
        path: '/addnew',
        subRoutes: [
            { subpath: '/addnew/them_ho_khau', element: HKForm, id: 'ad1' },
            { subpath: '/addnew/them_nhan_khau', element: NKForm, id: 'ad2' },
        ],
        id: 'tb',
        layout: DefaultLayout
    },
    {
        path: '/table', subRoutes: [
            { subpath: '/table/ho_khau', element: HKTable, id: 'tb1' },
            { subpath: '/table/nhan_khau', element: NKTable, id: 'tb2' },
        ],
        layout: DefaultLayout, id: 'add'
    },
    { path: '/notification', element: Notification, layout: DefaultLayout, id: 'noti' },
    { path: '/profile', element: Profile, layout: DefaultLayout, id: 'pro' },
    { path: '/logout', element: NKTable, layout: DefaultLayout, id: 'log' },
    { path: '/error', element: Error, layout: DefaultLayout, id: 'log' },

]
const loginRoute = [
    { path: '/', element: Start, layout: AuthenticationLayout, id: 'start' },
    {
        path: '/authenticate', element: Authentication, layout: AuthenticationLayout, id: 'default'
    }];
// const errorRoute = { path: '/error', element: ErrorLogin, layout: AuthenticationLayout, id: 'error' };
export { routes, loginRoute }