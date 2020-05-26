import React from 'react';
import { createCn } from 'bem-react-classname';

import './link.scss';

function Link({ href, children, color }) {
    const cn = createCn('link');

    return (
        <a href={href} className={cn({ color }) }>
            {children}
        </a>
    );
}

export default Link;