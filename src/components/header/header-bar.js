import React from 'react';

import Logo from '../../assets/images/logo.png';
import Search from '../../assets/icons/search.png';
import { Input, Link } from '../../uikit';
import HeaderBarLink from './header-bar-link';
import HeaderBarProfile from "./header-bar-profile";

function HeaderBar({ navigationItems }) {
    return (
        <div className="header-bar">
            <Link href="#">
                <img src={Logo}/>
            </Link>

            <nav className="header-bar-navigation">
                {navigationItems.map(({ page, active }) => (
                    <HeaderBarLink text={page} active={active} key={page} />
                ))}
            </nav>

            <div className="header-bar-stack">
                <Input type="text" icon={Search} placeholder="Try « Chicken cotoletta »" className="header-bar-search" />
                <HeaderBarProfile />
            </div>
        </div>
    );
}

export default HeaderBar;