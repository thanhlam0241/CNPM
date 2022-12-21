import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from "react-router-dom";
//icons
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
const cx = classNames.bind(styles);


function Header({ text }) {
    return (
        <header >
            <div className={cx('header-head')}>
                <div className={cx('header-1')}>
                    <div className={cx('header-1-2')}>
                        <span><NavLink className={cx('nav-item')} to='/dashboard'><HomeIcon /></NavLink></span>
                        <span><KeyboardArrowRightIcon className={cx('nav-item')} /></span>
                        <span>{text}</span>
                    </div>
                    <h3>{text}</h3>
                </div>
            </div>
            <div className={cx('search')}>
                <input placeholder='Search something' spellCheck={false} />
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={cx('actions')}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            </div>
        </ header>
    )
}

export default Header;