import React from 'react';
import Modal from 'react-modal';
import {createCn} from 'bem-react-classname';

import './modal.scss';

const ModalComponent = ({ open, className, onClose, children }) => {
    const cn = createCn('modal', className);

    return (
        <Modal
            ariaHideApp={false}
            className={cn('content')}
            isOpen={open}
            onRequestClose={onClose}
            overlayClassName={cn('overlay')}
        >
            {children}
        </Modal>
    )
};

export default ModalComponent;