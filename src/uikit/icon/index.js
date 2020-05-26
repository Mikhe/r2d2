import React from 'react';
import {createCn} from 'bem-react-classname';

function Icon({ src, width, height }) {
    const cn = createCn('icon');

    return (
        <img src={src} style={{ width, height }} className={cn()} />
    );
}

export default Icon;