import React from 'react';
import { createCn } from 'bem-react-classname';

import './select.scss';

function Select({ options, onChange, placeholder, className, name }) {
    const cn = createCn('select', className);
    const handleChange = (e) => {
        onChange && onChange(e.target.value, name);
    };

    return (
        <div className={cn()}>
            <select required onChange={handleChange} name={name}>
                <option value="" hidden>{placeholder}</option>
                {options.map(option => (
                    <option value={option.value} key={option.value}>{option.text}</option>
                ))}
            </select>
        </div>
    );
}

export default Select;