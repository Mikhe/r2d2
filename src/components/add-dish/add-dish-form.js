import React from 'react';
import { observer } from 'mobx-react';
import {createCn} from 'bem-react-classname';

import { Button, Input, Select, TextArea } from '../../uikit';
import { addDishStore } from '../../stores/add-dish.store';
import AddDishFormIngredients from './add-dish-form-ingredients';

const categories = [
    { text: 'Meat', value: 1 },
    { text: 'Not meat', value: 2 }
];

const AddDishForm = observer(({ className }) => {
    const { updateData, addNewIngredient, isValid } = addDishStore;
    const cn = createCn(className);

    return (
        <div className={cn({ isValid })}>
            <Input
                name="title"
                placeholder="Dish name"
                maxLength={50}
                subplaceholder="Max. 50 Ch"
                onChange={updateData}
            />

            <Select
                name="category"
                placeholder="Select a dish category"
                options={categories}
                className={cn('row')}
                onChange={updateData}
            />

            <TextArea
                name="description"
                rows={3}
                placeholder="Dish description"
                maxLength={150}
                subplaceholder="Max. 150 Ch"
                className={cn('row')}
                onChange={updateData}
            />

            <div className={cn('ingredients')}>
                <div className={cn('ingredients-header')}>
                    <span className={cn('ingredients-header-title')}>Ingredients</span>
                    <Button
                        className={cn('ingredients-add-new')}
                        link={true}
                        text="Add a new ingredients"
                        icon="plus"
                        color="orange"
                        onClick={addNewIngredient}
                    />
                </div>

                <AddDishFormIngredients className={cn('ingredients-list')} />
            </div>
        </div>
    );
});

export default AddDishForm;