import React from 'react';
import { observer } from 'mobx-react';
import {createCn} from 'bem-react-classname';

import { FileInput } from '../../uikit';
import { addDishStore } from '../../stores/add-dish.store';

const AddDishHeader = observer(({ className }) => {
    const { form, updateData } = addDishStore;
    const { file, title, description } = form;
    const hasBackground = !!file;
    const cn = createCn(className);

    return (
        <>
            {file && (
                <img src={file} className={cn('upload')}/>
            )}

            <div className={cn({ hasBackground })}>
                <div className={cn('title')}>{title || 'Add a new dish'}</div>
                <div className={cn('subtitle')}>
                    {description || 'Please enter all informations about your new dish'}
                </div>
                <div className={cn('photo')}>
                    <FileInput
                        name="file"
                        className={cn('link', { hasBackground })}
                        icon="camera"
                        text={hasBackground ? 'Change the photo' : 'Add a photo'}
                        color={hasBackground ? 'white' : 'grey'}
                        accept="image/*"
                        onChange={updateData}
                    />
                </div>
            </div>
        </>
    );
});

export default AddDishHeader;