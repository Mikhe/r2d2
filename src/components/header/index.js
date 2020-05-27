import React from 'react';
import useScrollPosition from '@react-hook/window-scroll'
import {createCn} from 'bem-react-classname';


import './styles/header.scss';
import HeaderBar from './header-bar';

function Header({ navigationItems }) {
    const cn = createCn('header');
    const scrollY = useScrollPosition(30);
    const stick = scrollY > 50;

    return (
        <header className={cn({ stick })}>
            <HeaderBar navigationItems={navigationItems} className={cn('bar')} stick={stick} />

            {!stick && (
                <div className={cn('title')}>
                    Menu
                </div>
            )}
        </header>
    );
}

export default Header;