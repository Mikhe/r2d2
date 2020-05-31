import React from 'react';
import { observer } from 'mobx-react';
import { createCn } from 'bem-react-classname';

import { Icon, Input } from '../../uikit';
import {addDishStore} from '../../stores/add-dish.store';

const Ingredient = observer(({ className, ingredientId }) => {
    const { setIngredientData, ingredients, removeIngredient } = addDishStore;
    const cn = createCn(className);
    const ingredient = ingredients.get(ingredientId);
    const { kcl, name } = ingredient;
    const isValid = kcl && name;
    const handleChange = (value, prop) => {
        setIngredientData(ingredientId, value, prop);
    };
    const handleClick = () => {
        removeIngredient(ingredientId);
    };
    const handleKclChange = (value) => {
        const re = /^[0-9\b]+$/;

        if (value === '' || re.test(value)) {
            handleChange(parseInt(value), 'kcl');
        }
    };

    return (
        <div className={cn()}>
            <Icon name="menu" className={cn('menu')} />
            <Input
                value={name}
                name="name"
                icon="plus"
                className={cn('ingredient-name')}
                placeholder="Ingredient name"
                onChange={handleChange}
            />
            <Input
                value={kcl}
                name="kcl"
                className={cn('ingredient-weight', { valid: !!isValid })}
                placeholder="Weight (Kcl)"
                placeholderAlign="right"
                onChange={handleKclChange}
            />

            {isValid && (
                <Icon name="trash" className={cn('trash')} onClick={handleClick} />
            )}
        </div>
    );
});

export default Ingredient;