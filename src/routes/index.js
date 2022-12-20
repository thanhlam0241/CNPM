//page
import { NKTable, HKTable, TableEdit, ToolbarGrid } from '~/page/Table'
import { HKForm } from '~/page/Form'
import Authentication from '~/page/Authentication'
//layout
import DefaultLayout from '~/components/Layout/DefaultLayout'
import AuthenticationLayout from '~/components/Layout/AuthenticationLayout'

const routes = [
    { path: '/', element: Authentication, layout: AuthenticationLayout, id: 'default' },
    { path: '/dashboard', element: TableEdit, layout: DefaultLayout, id: 'db' },
    {
        path: '/tableview',
        subRoutes: [
            { subpath: '/tableview/tableview1', element: NKTable, id: 'tb1' },
            { subpath: '/tableview/tableview2', element: HKTable, id: 'tb2' },
        ],
        id: 'tb',
        layout: DefaultLayout
    },
    { path: '/addnew', element: ToolbarGrid, layout: DefaultLayout, id: 'add' },
    { path: '/notification', element: HKForm, layout: DefaultLayout, id: 'noti' },
    { path: '/account', element: NKTable, layout: DefaultLayout, id: 'acc' },
    { path: '/logout', element: NKTable, layout: DefaultLayout, id: 'log' },
    { path: '/authentication', element: Authentication, layout: AuthenticationLayout, id: 'auth' }
]

export { routes }