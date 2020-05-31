/* global describe, expect */

import { AddDishStore } from '../add-dish.store';

const store = new AddDishStore();

describe('[Add Dish store]', () => {
    test('method updateData saves values in an appropriate field', () => {
        store.updateData('base64', 'file');
        store.updateData('any', 'title');
        expect(store.form).toMatchObject({ file: 'base64', title: 'any' })
    });
});