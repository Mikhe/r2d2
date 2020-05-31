import React from 'react';
import { observer } from 'mobx-react';
import {createCn} from 'bem-react-classname';

import { Button, Icon, Input, Select, TextArea } from '../../uikit';
import { addDishStore } from "../../stores/add-dish.store";

const categories = [
    { text: 'Meat', value: 1 },
    { text: 'Not meat', value: 2 }
];

const AddDishForm = observer(({ className }) => {
    const { updateData } = addDishStore;
    const cn = createCn(className);

    return (
        <div className={cn()}>
            <Input
                name="title"
                placeholder="Dish name"
                maxLength={50}
                subplaceholder="Max. 50 Ch"
                onChange={updateData}
            />

            <Select placeholder="Select a dish category" options={categories} className={cn('row')} />

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
                    />
                </div>

                <div className={cn('ingredients-list')}>
                    <div className={cn('ingredients-list-item')}>
                        <Icon name="menu" className={cn('ingredients-list-item-menu')}/>
                        <Input
                            icon="plus"
                            className={cn('ingredients-list-item-ingredient-name')}
                            placeholder="Ingredient name"
                        />
                        <Input
                            className={cn('ingredients-list-item-ingredient-weight')}
                            placeholder="Weight (Kcl)"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default AddDishForm;