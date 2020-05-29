/* global describe, expect */

import { AddDishStore } from '../add-dish.store';

const store = new AddDishStore();

describe('[Add Dish store]', () => {
    test('method uploadFile stores file', () => {
        const file = 'base64';

        store.updateFile(file);
        expect(store.file).toBe(file);
    });
});