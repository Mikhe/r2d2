import React from 'react';
import {createCn} from 'bem-react-classname';

import Logo from '../../assets/images/logo.svg';
import Search from '../../assets/icons/search.png';
import { Input, Link } from '../../uikit';
import HeaderBarLink from './header-bar-link';
import HeaderBarProfile from './header-bar-profile';
import { dishesStore } from '../../stores/dishes.store';

function HeaderBar({ navigationItems, className, stick }) {
    const { searchDish } = dishesStore;
    const cn = createCn(className);
    const color = stick ? 'black' : 'white';

    return (
        <div className={cn()}>
            <Link href="#">
                <img src={Logo}/>
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
                    type="text"
                    icon={Search}
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