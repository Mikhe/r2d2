import React from 'react';
import { createCn } from 'bem-react-classname';

import './textarea.scss';

function TextArea({ placeholder, className, onChange, subplaceholder, maxLength, rows, name }) {
    const cn = createCn('textarea');
    const handleChange = (e) => {
        onChange && onChange(e.target.value, name);
    };

    return (
        <div className={cn({ subplaceholder: !!subplaceholder })}>
            <textarea
                name={name}
                rows={rows}
                placeholder={placeholder}
                className={className}
                maxLength={maxLength}
                onChange={handleChange}
            />

            {subplaceholder && <span className={cn('subplaceholder')}>{subplaceholder}</span>}
        </div>
    );
}

export default TextArea;