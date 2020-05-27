import {action, decorate, observable, autorun } from 'mobx';

import { api } from '../../../api';

class DishesStore {
    pageSize = 6;
    page = -1;

    constructor() {
        autorun(() => this.fetchDishes());
    }

    dishes = [];

    fetchDishes = () => {
        setTimeout(() => {
            this.page = this.page + 1;
            this.dishes = this.dishes.concat(api.fetchDishes({ pageSize: this.pageSize, page: this.page }).map(dish => (
                { ...dish, kcl: dish.ingredients.reduce((sum, ingredient) => {
                    return sum + ingredient.kcl;
                }, 0)}
            )));
        }, 1000);
    }
}

decorate(DishesStore, {
    dishes: observable,
    fetchDishes: action,
});

export const dishesStore = new DishesStore();