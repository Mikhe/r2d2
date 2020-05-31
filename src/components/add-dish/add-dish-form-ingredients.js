import React from 'react';
import { observer } from 'mobx-react';
import {createCn} from 'bem-react-classname';

import { addDishStore } from '../../stores/add-dish.store';
import Ingredient from './ingredient';

const AddDishFormIngredients = observer(({ className }) => {
    const { ingredients, getTotal } = addDishStore;
    const cn = createCn(className);
    const { count, kcl } = getTotal;

    return (
        <div className={cn()}>
            {Array.from(ingredients).map(([id]) => {
                return <Ingredient className={cn('item')} ingredientId={id} key={id}/>
            })}

            <div className={cn('summary')}>
                <div className={cn('summary-count')}>
                    <b>{count} Ingredients</b>{' '}<span>in your dish</span>
                </div>

                <div className={cn('summary-kcl-count')}>
                    Total weight : <b><span>{kcl}{' '}Kcl</span></b>
                </div>
            </div>
        </div>
    );
});

export default AddDishFormIngredients;