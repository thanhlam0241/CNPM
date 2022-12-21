//page
import { NKTable, HKTable, TableEdit, ToolbarGrid } from '~/page/Table'
import { HKForm, NKForm } from '~/page/Form'
import DashboardComponent from '~/page/Dashboard'
import Authentication from '~/page/Authentication'
//layout
import DefaultLayout from '~/components/Layout/DefaultLayout'
import AuthenticationLayout from '~/components/Layout/AuthenticationLayout'

const routes = [
    { path: '/', element: Authentication, layout: AuthenticationLayout, id: 'default' },
    { path: '/dashboard', element: DashboardComponent, layout: DefaultLayout, id: 'db' },
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
    { path: '/notification', element: HKForm, layout: DefaultLayout, id: 'noti' },
    { path: '/account', element: NKForm, layout: DefaultLayout, id: 'acc' },
    { path: '/logout', element: NKTable, layout: DefaultLayout, id: 'log' },
    { path: '/authentication', element: Authentication, layout: AuthenticationLayout, id: 'auth' }
]

export { routes }