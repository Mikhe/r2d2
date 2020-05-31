import React from 'react';
import {createCn} from 'bem-react-classname';

import LogoBlack from '../../assets/images/logo_black.svg';
import Logo from '../../assets/images/logo.png';
import { Input, Link } from '../../uikit';
import HeaderBarLink from './header-bar-link';
import HeaderBarProfile from './header-bar-profile';
import { dishesStore } from '../../stores/dishes.store';

function HeaderBar({ navigationItems, className, stick }) {
    const { searchDish } = dishesStore;
    const cn = createCn(className);
    let color = 'white';
    let logoSrc = Logo;

    if (stick) {
        color = 'black';
        logoSrc = LogoBlack;
    }

    return (
        <div className={cn()}>
            <Link href="#">
                <img src={logoSrc}/>
            </Link>

            <nav className={cn('navigation')}>
                {navigationItems.map(({ page, active }) => (
                    <HeaderBarLink
                        text={page}
                        active={active}
                        key={page}
                        className={cn('navigation')}
                        color={color}
                    />
                ))}
            </nav>

            <div className={cn('stack')}>
                <Input
                    icon="search"
                    placeholder="Try « Chicken cotoletta »"
                    className={cn('search')}
                    onChange={searchDish}
                />
                <HeaderBarProfile className={cn('profile')} color={color} />
            </div>
        </div>
    );
}

export default HeaderBar;