//icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableViewIcon from '@mui/icons-material/TableView';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';


const buttons = [
    { icon: <DashboardIcon />, title: 'Dashboard', link: '/dashboard', id: 'dashboard' },
    {
        icon: <TableViewIcon />, title: 'Table View', link: '/tableview/tableview1',
        collapse: [
            { title: 'Table View 1', id: 'tableview1', linkCol: '/tableview/tableview1' },
            { title: 'Table View 2', id: 'tableview2', linkCol: '/tableview/tableview2' }
        ]
    },
    { icon: <PlaylistAddIcon />, title: 'Add New', link: '/addnew', id: 'addnew' },
    { icon: <NotificationsNoneIcon />, title: 'Notifications', link: '/notification', id: 'notification' },
    { icon: <AccountBoxIcon />, title: 'Account', link: '/account', id: 'account' },
    { icon: <LogoutIcon />, title: 'Logout', link: '/authentication', id: 'logout' },
]

export default buttons;