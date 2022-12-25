import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import fuhua from '~/assets/avatars/fuhua.png';
import { CameraAltOutlined } from '@mui/icons-material';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <div className={cx('account-view')}>
            <div style={{ position: 'relative' }}>
                <img className={cx('avatar')} src={fuhua} alt='Hello' />
                <button className={cx('change-avatar')}><CameraAltOutlined /></button>
            </div>
            <h3>Thanh Lâm</h3>
            <span>thanhlam0241</span>
            <span>Quyền hạn: </span>
            <hr />
            <span>Nghề nghiệp : </span>
            <span>Số điện thoại : </span>
        </div>
    )
}