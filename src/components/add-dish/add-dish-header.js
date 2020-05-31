import React from 'react';
import { observer } from 'mobx-react';
import {createCn} from 'bem-react-classname';

import { FileInput } from '../../uikit';
import { addDishStore } from '../../stores/add-dish.store';

const AddDishHeader = observer(({ className }) => {
    const { file, updateFile } = addDishStore;
    const hasBackground = !!file;
    const cn = createCn(className);

    return (
        <>
            {file && (
                <img src={file} className={cn('upload')}/>
            )}

            <div className={cn({ hasBackground })}>
                <div className={cn('title')}>Add a new dish</div>
                <div className={cn('subtitle')}>
                    Please enter all informations about your new dish
                </div>
                <div className={cn('photo')}>
                    <FileInput
                        className={cn('link', { hasBackground })}
                        icon="camera"
                        text={hasBackground ? 'Change the photo' : 'Add a photo'}
                        color={hasBackground ? 'white' : 'grey'}
                        accept="image/*"
                        onChange={updateFile}
                    />
                </div>
            </div>
        </>
    );
});

export default AddDishHeader;