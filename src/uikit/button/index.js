import React from 'react';
import { createCn } from 'bem-react-classname';

import './button.scss';
import { Icon } from '../index';

function Button({ text, icon, className, onClick, color }) {
    const cn = createCn('button', className);

    return (
        <button className={cn({ icon: !!icon, color: color })} onClick={onClick}>
            {text || ''}

            {icon && (
                <Icon src={icon} width={24} height={24} />
            )}
        </button>
    );
}

export default Button;