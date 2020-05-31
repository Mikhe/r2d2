import React from 'react';
import { observer } from 'mobx-react';
import { createCn } from 'bem-react-classname';

import { addDishStore } from '../../stores/add-dish.store';
import { Button, Icon } from '../../uikit';

const AddDishFooter = observer(({ className }) => {
    const { isValid, getTotal } = addDishStore;
    const cn = createCn(className);
    const { kcl } = getTotal;

    if (!isValid) {
        return null;
    }

    return (
        <div className={cn()}>
            <Button
                className={cn('add-new-dish')}
                link={true}
                text={<span>{`Add this dish to my menu ${kcl}`}&nbsp;&nbsp;&nbsp;Kcl</span>}
                color="white"
            />
            <Icon name="plus" className={cn('add-new-dish-icon')} color="white" />
        </div>
    );
});

export default AddDishFooter;