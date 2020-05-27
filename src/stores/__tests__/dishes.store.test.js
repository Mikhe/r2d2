/* global describe, expect */

import { wait } from '@testing-library/react'

import { DishesStore } from '../dishes.store';
import { mockDishes } from '../../api';

const store = new DishesStore();

describe('[Dishes store]', () => {
    test('store inits with fetching dishes', async () => {
        const store2 = new DishesStore();

        await wait(() => {
            expect(store2.dishes.length).toBe(mockDishes.length);
        }, 2000);
    });

    test('method fetchDishes gets dishes and adds it to array', async () => {
        await store.fetchDishes();
        expect(store.dishes.length).toBe(mockDishes.length * 2);
    });

    test('method countKCL calculates sum of ingredients', async () => {
        const calculatedKCL = store.countKCL([mockDishes[0]]);

        expect(calculatedKCL[0].kcl).toBe(243);
    });

    test('method searchDish founds by name', async () => {
        const name = 'Cotoletta';
        store.searchDish(name);

        await wait(() => {
            expect(store.foundDishes.length).toBe(2);
            expect(store.foundDishes[0].title.toLowerCase().includes(name.toLowerCase())).toBe(true);
        }, 2000);
    });

    test('method searchDish founds by ingredient', async () => {
        const name = 'chicken';
        store.searchDish(name);

        await wait(() => {
            expect(store.foundDishes.length).toBe(2);
            expect(store.foundDishes[0].ingredients[0].name.toLowerCase().includes(name.toLowerCase())).toBe(true);
        }, 2000);
    });

    test('method searchDish founds by multi ingredients', async () => {
        store.searchDish('chicken beef');

        await wait(() => {
            expect(store.foundDishes.length).toBe(4);
            expect(store.foundDishes[0].ingredients[0].name.toLowerCase().includes('beef')).toBe(true);
            expect(store.foundDishes[1].ingredients[0].name.toLowerCase().includes('chicken')).toBe(true);
        }, 2000);
    });

    test('method searchDish founds by name or ingredient', async () => {
        store.searchDish('Cotoletta beef');

        await wait(() => {
            expect(store.foundDishes.length).toBe(4);
            expect(store.foundDishes[0].ingredients[0].name.toLowerCase().includes('beef')).toBe(true);
            expect(store.foundDishes[1].ingredients[0].name.toLowerCase().includes('chicken')).toBe(true);
        }, 2000);
    });
});