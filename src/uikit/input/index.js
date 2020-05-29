import React from 'react';
import { createCn } from 'bem-react-classname';

import './input.scss';
import { Icon } from '../index';

function Input({ type, icon, placeholder, className, onChange, subplaceholder, maxLength }) {
    const cn = createCn('input');
    const handleChange = (e) => {
        onChange && onChange(e.target.value);
    };

    return (
        <div className={cn({ icon: !!icon, subplaceholder: !!subplaceholder })}>
            <input
                type={type}
                placeholder={placeholder}
                className={className}
                maxLength={maxLength}
                onChange={handleChange}
            />

            {icon && (
                <Icon src={icon} width={24} height={24} />
            )}

            {subplaceholder && <span className={cn('subplaceholder')}>{subplaceholder}</span>}
        </div>
    );
}

export default Input;