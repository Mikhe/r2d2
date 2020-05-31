import React, { useRef } from 'react';
import { createCn } from 'bem-react-classname';

import './fileinput.scss';

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
        <div className={`${cn({ icon: !!icon })} ${className}`}>
            <input type="file" onChange={handleChange} accept={accept} ref={inputRef} />
            <span className={cn('text', { color })} onClick={handleClick}>{text}</span>

            {icon && (
                <div className={cn('icon', { icon, color: 'black' })} />
            )}
        </div>
    );
}

export default FileInput;