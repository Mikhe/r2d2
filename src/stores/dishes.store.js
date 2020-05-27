import { action, decorate, observable, autorun, runInAction } from 'mobx';
import { debounce } from 'debounce';

import { api } from '../api';

export class DishesStore {
    pageSize = 6;
    page = 0;
    dishes = [];
    foundDishes = [];
    searchBy = '';
    isLoading = false;

    constructor() {
        autorun(() => this.fetchDishes());
    }

    countKCL = (dishes) => {
        return dishes.map(dish => (
            { ...dish, kcl: dish.ingredients.reduce((sum, ingredient) => {
                return sum + ingredient.kcl;
            }, 0)}
        ));
    };

    fetchDishes = async () => {
        this.isLoading = true;

        try {
            let newDishes = await api.fetchDishes({pageSize: this.pageSize, page: this.page});

            newDishes = this.countKCL(newDishes);
            this.dishes = this.dishes.concat(newDishes);
            this.page = this.page + 1;
        } catch (e) {
            console.error(e);
        } finally {
            this.isLoading = false;
        }
    };

    searchDish = debounce(async (search) => {
        this.isLoading = true;
        this.foundDishes = [];

        try {
            this.searchBy = search;

            if (search) {
                let foundDishes = await api.searchDish(search);

                runInAction(() => {
                    this.foundDishes = this.countKCL(foundDishes);
                })
            }
        } catch(e) {
            console.error(e);
        } finally {
            this.isLoading = false;
        }
    }, 500);
}

decorate(DishesStore, {
    dishes: observable,
    foundDishes: observable,
    searchBy: observable,
    isLoading: observable,
    fetchDishes: action,
    searchDish: action,
});

export const dishesStore = new DishesStore();