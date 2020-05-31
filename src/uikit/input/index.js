import React from 'react';
import { createCn } from 'bem-react-classname';

import './input.scss';

function Input({ icon, placeholder, className, onChange, subplaceholder, maxLength, name }) {
    const cn = createCn('input', className);
    const handleChange = (e) => {
        onChange && onChange(e.target.value, name);
    };

    return (
        <div className={cn({ icon: !!icon, subplaceholder: !!subplaceholder })}>
            <input
                name={name}
                type="text"
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={handleChange}
            />

            {icon && (
                <div className={cn('icon', { icon, color: 'black' })} />
            )}

            {subplaceholder && <span className={cn('subplaceholder')}>{subplaceholder}</span>}
        </div>
    );
}

export default Input;