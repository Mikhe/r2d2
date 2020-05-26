import React from 'react';

import User from '../../assets/icons/user.png';
import { Link, Icon } from '../../uikit';

function HeaderBarProfile() {
    return (
        <div className="header-bar-profile">
            <Link href="#" color="white">
                John C.
            </Link>
            <Icon src={User} width={18} height={20} />
        </div>
    );
}

export default HeaderBarProfile;