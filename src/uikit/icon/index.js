import React from 'react';
import { createCn } from 'bem-react-classname';

import './icon.scss';

function Icon({ name, width, height, className, color }) {
    const cn = createCn('icon', className);

    color = color || 'black';

    return (
        <div className={cn()}>
            <div
                style={{ width: width, height: height }}
                className={cn('icon', { icon: name, color })}
            />
        </div>
    );
}

export default Icon;