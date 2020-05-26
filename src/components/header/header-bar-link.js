import React from 'react';
import {createCn} from 'bem-react-classname';

import Link from '../../uikit/link';

function HeaderBarLink({ text, active }) {
    const cn = createCn('navigation-link');

    return (
        <div className={cn({ active })}>
            <Link href="#" color="white">{text}</Link>
        </div>
    );
}

export default HeaderBarLink;