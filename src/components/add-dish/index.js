import React from 'react';
import { observer } from 'mobx-react';
import { createCn } from 'bem-react-classname';

import './styles/add-dish.scss';
import { dishesStore } from '../../stores/dishes.store';
import { Modal } from '../../uikit';
import AddDishHeader from './add-dish-header';
import AddDishForm from './add-dish-form';

const AddDishModal = observer(() => {
    const { isAddDishModalOpen, closeAddDishModal } = dishesStore;
    const cn = createCn('add-dish-modal');

    return (
        <Modal
            className={cn}
            open={isAddDishModalOpen}
            onClose={closeAddDishModal}
        >
            <div className={cn()}>
                <AddDishHeader className={cn('header')}/>
                <AddDishForm className={cn('form')}/>
            </div>
        </Modal>
    );
});

export default AddDishModal;