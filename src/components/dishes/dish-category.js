import React from 'react';
import { observer } from 'mobx-react';
import { createCn } from 'bem-react-classname';

import Button from '../../uikit/button';
import {dishesStore} from '../../stores/dishes.store';

const DishCategory = observer(({ className }) => {
    const { openAddDishModal } = dishesStore;
    const cn = createCn(className);

    return (
        <>
            <div className={cn()}>
                <div className={cn('sticker')} />
                <div className={cn('stack')}>
                    <div className={cn('title')}>Meat Dishes</div>
                    <div className={cn('subtitle')}>Some of the best meat dishes from worldwide</div>
                </div>
            </div>

            <Button
                className={cn('add-dish')}
                text="Add a new dish"
                icon="plus"
                color="orange"
                onClick={openAddDishModal}
            />
        </>
    );
});

export default DishCategory;