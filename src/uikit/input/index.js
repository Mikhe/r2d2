import React from 'react';
import { createCn } from 'bem-react-classname';

import './input.scss';
import { Icon } from '../index';

function Input({ type, icon, placeholder, className }) {
    const cn = createCn('input');

    return (
        <div className={cn({ icon: !!icon })}>
            <input type={type} placeholder={placeholder} className={className}/>

            {icon && (
                <Icon src={icon} width={24} height={24} />
            )}
        </div>
    );
}

export default Input;