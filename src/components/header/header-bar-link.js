import React from 'react';
import {createCn} from 'bem-react-classname';

import Link from '../../uikit/link';

function HeaderBarLink({ text, active, className, color }) {
    const cn = createCn(className);

    return (
        <div className={cn('link', { active })}>
            <Link href="#" color={color}>{text}</Link>
        </div>
    );
}

export default HeaderBarLink;