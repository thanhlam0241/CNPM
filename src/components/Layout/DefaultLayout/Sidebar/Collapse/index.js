import { NavLink } from "react-router-dom";
import { useState, useCallback, useContext } from 'react'
import styles from '~/components/Layout/DefaultLayout/Sidebar/Sidebar.module.scss'
import classNames from 'classnames/bind';
import SmoothCollapse from 'react-smooth-collapse';
import { TitleContext } from '../../';
const cx = classNames.bind(styles);


function CollapseButton({ buttonObject, isOpen }) {
    const changer = useContext(TitleContext);
    const [visible, setVisible] = useState(false);
    const toggle = useCallback(() => setVisible(prev => !prev), []);
    return (
        <>
            <NavLink to={buttonObject.link} className={cx('btn-side')} onClick={toggle}>
                <span>{buttonObject.icon}</span>
                <span className={isOpen ? cx('normal-btn') : cx('hide-btn')} >{isOpen && buttonObject.title}</span>
            </NavLink>
            {isOpen && (
                <SmoothCollapse
                    expanded={visible}
                >
                    <div className={cx('nav-group-collapse')}>
                        {buttonObject.collapse.map((item) => {
                            return <NavLink
                                key={item.id}
                                className={({ isActive }) => {
                                    if (isActive) {
                                        setTimeout(() => changer(item.title), 100);
                                        return cx('nav-btn-collapse-active');
                                    }
                                    else {
                                        return cx('nav-btn-collapse');
                                    }
                                }}
                                to={item.linkCol}>
                                <span>{item.title}</span>
                            </NavLink>
                        })}
                    </div>
                </SmoothCollapse>)
            }
        </>
    )
}

export default CollapseButton