import React from 'react';
import { createCn } from 'bem-react-classname';

import './icon.scss';

function Icon({ name, width, height, className, color, onClick }) {
    const cn = createCn('icon', className);
    const handleClick = () => {
        onClick && onClick();
    };

    color = color || 'black';

    return (
        <div className={cn({ clickable: !!onClick })} onClick={handleClick}>
            <div
                style={{ width: width, height: height }}
                className={cn('icon', { icon: name, color })}
            />
        </div>
    );
}

export default Icon;