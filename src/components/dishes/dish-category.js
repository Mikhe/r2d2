import React from 'react';
import { createCn } from 'bem-react-classname';

import Plus from '../../assets/icons/plus.png';
import Button from '../../uikit/button';

function DishCategory({ className }) {
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
                icon={Plus}
                color="orange"
            />
        </>
    );
}

export default DishCategory;