import React from 'react';
import { createCn } from 'bem-react-classname';

import './input.scss';
import { Icon } from '../index';

function Input({ type, icon, placeholder, className, onChange }) {
    const cn = createCn('input');
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className={cn({ icon: !!icon })}>
            <input type={type} placeholder={placeholder} className={className} onChange={handleChange} />

            {icon && (
                <Icon src={icon} width={24} height={24} />
            )}
        </div>
    );
}

export default Input;