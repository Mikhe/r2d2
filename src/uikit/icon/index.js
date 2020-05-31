import React from 'react';
import {createCn} from 'bem-react-classname';

function Icon({ src, width, height, className }) {
    const cn = createCn('icon', className);

    return (
        <img src={src} style={{ width: width || 24, height: height || 24 }} className={cn()} />
    );
}

export default Icon;