import React from 'react';
import { observer } from 'mobx-react';
import { createCn } from 'bem-react-classname';

import './styles/add-dish.scss';
import Camera from '../../assets/icons/camera.svg';
import CameraBlack from '../../assets/icons/camera_black.svg';
import { dishesStore } from '../../stores/dishes.store';
import { FileInput, Modal } from '../../uikit';
import {addDishStore} from '../../stores/add-dish.store';

const AddDishModal = observer(() => {
    const { isAddDishModalOpen, closeAddDishModal } = dishesStore;
    const { file, updateFile } = addDishStore;
    const cn = createCn('add-dish-modal');
    const hasBackground = !!file;

    return (
        <Modal
            className={cn}
            open={isAddDishModalOpen}
            onClose={closeAddDishModal}
        >
            <div className={cn()}>
                {file && (
                    <img src={file} className={cn('upload')}/>
                )}
                <div className={cn('header', { hasBackground })}>
                    <div className={cn('title')}>Add a new dish</div>
                    <div className={cn('subtitle')}>
                        Please enter all informations about your new dish
                    </div>
                    <div className={cn('photo')}>
                        <FileInput
                            className={cn('link', { hasBackground })}
                            icon={hasBackground ? Camera : CameraBlack}
                            text="Add a photo"
                            color={hasBackground ? 'white' : 'grey'}
                            accept="image/*"
                            onChange={updateFile}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
});

export default AddDishModal;