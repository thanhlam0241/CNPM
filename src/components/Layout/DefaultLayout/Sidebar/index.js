import styles from './Sidebar.module.scss';
import { useState, useContext } from 'react';
//icon
import MenuIcon from '@mui/icons-material/Menu';
import buttons from './ButtonNav';
import classNames from 'classnames/bind';
import { NavLink } from "react-router-dom";
import CollapseButton from './Collapse';
import { TitleContext } from '../';
const cx = classNames.bind(styles);

function Sidebar() {
    const changer = useContext(TitleContext);
    const [open, setOpen] = useState(true);
    const toggle = (e) => {
        setOpen(!open);
    }
    return (
        <div className={cx('side-bar')}>
            <NavLink className={cx('btn-menu')} onClick={toggle}>
                <span><MenuIcon /></span>
                <span className={open ? cx('normal-btn') : cx('hide-btn')} >{open && 'Menu'}</span>
            </NavLink>
            <hr />
            {buttons.map((button) => {
                if (!button.hasOwnProperty('collapse')) {
                    return (
                        <NavLink key={button.id} className={({ isActive }) => {
                            if (isActive) {
                                setTimeout(() => changer(button.title), 100);
                                return cx('btn-side-active');
                            }
                            else {
                                return cx('btn-side');
                            }
                        }} to={button.link}  >
                            <span key={button.id + 'span1'} >{button.icon}</span>
                            <span key={button.id + 'span2'} className={open ? cx('normal-btn') : cx('hide-btn')}>{open && button.title}</span>
                        </NavLink>
                    )
                }
                else {
                    return (
                        <CollapseButton key={button.id} buttonObject={button} isOpen={open} />
                    )
                }
            })
            }
        </ div>
    )
}
export default Sidebar;