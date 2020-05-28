import React, { useRef } from 'react';
import { createCn } from 'bem-react-classname';

import './fileinput.scss';
import { Icon } from '../index';

function FileInput({ icon, text, className, onChange, color, accept }) {
    const cn = createCn('fileinput');
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.click();
    };
    const handleChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            onChange(event.target.result, file);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className={cn({ icon: !!icon })}>
            <input type="file" className={className} onChange={handleChange} accept={accept} ref={inputRef} />
            <span className={cn('text', { color })} onClick={handleClick}>{text}</span>

            {icon && (
                <Icon src={icon} width={24} height={24} />
            )}
        </div>
    );
}

export default FileInput;