/* global describe, expect */

import { AddDishStore } from '../add-dish.store';
import { emptyIngredient } from '../add-dish.store';

const store = new AddDishStore();

describe('[Add Dish store]', () => {
    test('Store inits with preset', () => {
        expect(store.ingredients.get(1)).toMatchObject(emptyIngredient)
    });

    test('method ingredientsAreValid returns false if ingredients are not valid', () => {
        expect(store.ingredientsAreValid()).toBe(false);

    });

    test('method removeIngredient doesnt remove ingredient if there is just 1', () => {
        store.removeIngredient(1);
        expect(store.ingredients.size).toBe(1);

    });

    test('method addNewIngredient doesnt add empty ingredient when ingredients are not valid', () => {
        store.addNewIngredient();
        expect(store.ingredients.get(2)).toBe(undefined);

    });

    test('method setIngredientData sets data to ingredient', () => {
        store.setIngredientData(1, 'test', 'name');
        store.setIngredientData(1, 1, 'kcl');
        expect(store.ingredients.get(1)).toEqual({ name: 'test', kcl: 1 });

    });

    test('method ingredientsAreValid returns true if ingredients are valid', () => {
        expect(store.ingredientsAreValid()).toBe(true);

    });

    test('method addNewIngredient adds empty ingredient if previous are valid', () => {
        store.addNewIngredient();
        expect(store.ingredients.get(2)).toMatchObject(emptyIngredient);
    });

    test('method getTotal counts just valid ingredients', () => {
        store.setIngredientData(2, 5, 'kcl');
        expect(store.getTotal).toEqual({ count: 1, kcl: 1 });
    });

    test('method removeIngredient removes ingredient', () => {
        store.removeIngredient(2);
        expect(store.ingredients.size).toBe(1);

    });

    test('method updateData saves values in an appropriate field', () => {
        store.updateData('base64', 'file');
        store.updateData('any', 'title');
        store.updateData('any', 'description');
        expect(store.form).toMatchObject({ file: 'base64', title: 'any' })
    });

    test('method isValid checks all form', () => {
        expect(store.isValid).toBe(false);
        store.updateData('any', 'category');
        expect(store.isValid).toBe(true);
    });
});