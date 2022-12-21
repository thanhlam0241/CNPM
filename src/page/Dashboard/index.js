import { NavLink } from 'react-router-dom';
import styles from './Dashboard.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function DashboardComponent() {
    return (
        <div className={cx('dashboard')}>
            <NavLink to='/addnew/them_nhan_khau'>
                <div>
                    <img src='../../assets/Image/Dashboard/add_data.png' alt='Thêm dữ liệu' />
                </div>
            </NavLink>
        </div>
    )
}