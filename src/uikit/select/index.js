import React from 'react';
import { createCn } from 'bem-react-classname';

import './select.scss';

function Select({ options, onChange, placeholder }) {
    const cn = createCn('select');
    const handleChange = (e) => {
        onChange && onChange(e.target.value);
    };

    return (
        <div className={cn()}>
            <select required onChange={handleChange}>
                <option value="" hidden>{placeholder}</option>
                {options.map(option => (
                    <option value={option.value} key={option.value}>{option.text}</option>
                ))}
            </select>
        </div>
    );
}

export default Select;