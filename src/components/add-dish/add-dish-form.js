import React from 'react';
import {createCn} from 'bem-react-classname';

import { Button, Icon, Input, Select, TextArea } from '../../uikit';
import PlusOrange from '../../assets/icons/plus_orange.svg';
import Menu from '../../assets/icons/menu.svg';
import PlusBlack from '../../assets/icons/plus_black.svg';

const categories = [
    { text: 'Meat', value: 1 },
    { text: 'Not meat', value: 2 }
];

const AddDishForm = ({ className }) => {
    const cn = createCn(className);

    return (
        <div className={cn()}>
            <Input
                type="text"
                placeholder="Dish name"
                maxLength={50}
                subplaceholder="Max. 50 Ch"
            />

            <Select placeholder="Select a dish category" options={categories} className={cn('row')} />

            <TextArea
                rows={3}
                placeholder="Dish description"
                maxLength={150}
                subplaceholder="Max. 150 Ch"
                className={cn('row')}
            />

            <div className={cn('ingredients')}>
                <div className={cn('ingredients-header')}>
                    <span className={cn('ingredients-header-title')}>Ingredients</span>
                    <Button
                        className={cn('ingredients-add-new')}
                        link={true}
                        text="Add a new ingredients"
                        icon={PlusOrange}
                        color="orange"
                    />
                </div>

                <div className={cn('ingredients-list')}>
                    <div className={cn('ingredients-list-item')}>
                        <Icon src={Menu} className={cn('ingredients-list-item-menu')}/>
                        <Input
                            icon={PlusBlack}
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
};

export default AddDishForm;