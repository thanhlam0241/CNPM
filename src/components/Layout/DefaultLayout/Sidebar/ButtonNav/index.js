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
        icon: <PlaylistAddIcon />, title: 'Thêm', link: '/addnew/them_ho_khau',
        collapse: [
            { title: 'Thêm hộ khẩu', id: 'addnew1', linkCol: '/addnew/them_ho_khau' },
            { title: 'Thêm nhân khẩu', id: 'addnew2', linkCol: '/addnew/them_nhan_khau' }
        ]
    },
    {
        icon: <TableViewIcon />, title: 'Tra cứu', link: '/table/ho_khau', id: 'table',
        collapse: [
            { title: 'Hộ khẩu', id: 'table1', linkCol: '/table/ho_khau' },
            { title: 'Nhân khẩu', id: 'table2', linkCol: '/table/nhan_khau' }
        ]
    },
    { icon: <NotificationsNoneIcon />, title: 'Notifications', link: '/notification', id: 'notification' },
    { icon: <AccountBoxIcon />, title: 'Account', link: '/account', id: 'account' },
    { icon: <LogoutIcon />, title: 'Logout', link: '/authentication', id: 'logout' },
]

export default buttons;