import React from 'react';
import {createCn} from 'bem-react-classname';

import User from '../../assets/icons/user.png';
import UserBlack from '../../assets/icons/user_black.png';
import { Link, Icon } from '../../uikit';

function HeaderBarProfile({ className, color }) {
    const cn = createCn(className);
    const icon = color === 'white' ? User : UserBlack;

    return (
        <div className={cn()}>
            <Link href="#" color={color}>
                John C.
            </Link>
            <Icon src={icon} width={18} height={20} />
        </div>
    );
}

export default HeaderBarProfile;