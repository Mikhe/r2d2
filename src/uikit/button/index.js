import React from 'react';
import { createCn } from 'bem-react-classname';

import './button.scss';

function Button({ text, icon, className, onClick, color, link }) {
    const cn = createCn('button', className);

    return (
        <button className={cn({ icon: !!icon, color, link, withBg: !link })} onClick={onClick}>
            {text || ''}

            {icon && (
                <div className={cn('icon', { icon, color })} />
            )}
        </button>
    );
}

export default Button;