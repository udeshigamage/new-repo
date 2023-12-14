import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './SideNavigationPanel.css';

import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export default function SideNavigationPanel({ appRoutes }) {
    const [active, setActive] = useState(false);

    function toggleActive() { setActive(!active); }

    return (
        <>
            <div className='side-nav-panel'>
                <Link to='#' className='side-nav-panel-bars' onClick={toggleActive}>
                        <FaIcons.FaBars />
                </Link>
            </div>
            <nav className={active ? 'side-nav-panel-menu active' : 'side-nav-panel-menu'}>
                <ul className='side-nav-panel-menu-items' onClick={toggleActive}>
                    <li key={0} className='side-nav-panel-toggle'>
                        <Link to='#'>
                            <IoIcons.IoIosArrowRoundBack />
                        </Link>
                    </li>
                    {appRoutes.admin.map((route, index) => {
                        return (
                            <li key={index + 1} className='side-nav-panel-menu-item'>
                                <Link to={route.Path}>
                                    {route.Icon}
                                    <span>{route.Title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}