import React from 'react';

import './styles/header.scss';
import HeaderBar from './header-bar';

function Header({ navigationItems }) {
    return (
        <header className="header">
            <HeaderBar navigationItems={navigationItems} />

            <div className="header-title">
                Menu
            </div>
        </header>
    );
}

export default Header;