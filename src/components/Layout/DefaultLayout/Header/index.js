import { useState, useRef, useContext, useCallback, useEffect } from 'react';
import { AuthContext } from '~/components/AuthenProvider';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from "react-router-dom";
import fuhua from '~/assets/avatars/fuhua.png';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
//icons
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@mui/material';
const cx = classNames.bind(styles);


function Header({ text }) {
    const { auth, setAuth } = useContext(AuthContext);
    const tippy = useRef();
    const [tippyAvatar, setTippyAvatar] = useState(null);
    const turnOnTippy = (e) => {
        setTippyAvatar(true);
    }
    useEffect(() => {
        function handleClickOutside(event) {
            if (tippy.current && !tippy.current.contains(event.target)) {
                setTippyAvatar(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
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
            <div className={cx('actions')} >
                <Tippy
                    interactive
                    visible={tippyAvatar}
                    render={attrs => (
                        <div ref={tippy} className={cx('tippy')} tabIndex="-1" {...attrs}>
                            <PopperWrapper >
                                <div className={cx('btn')}>
                                    <NavLink to='/profile'>Thông tin tài khoản</NavLink>
                                </div>
                                <div className={cx('btn')}>
                                    <NavLink to='/' onClick={() => { localStorage.removeItem('myUserNameReactApp'); }}>Đăng xuất</NavLink>
                                </div>
                            </PopperWrapper>

                        </div>
                    )}
                >
                    <Avatar sx={{ cursor: 'pointer' }} src={fuhua} onClick={turnOnTippy} />
                </Tippy>
            </div>
        </ header>
    )
}

export default Header;