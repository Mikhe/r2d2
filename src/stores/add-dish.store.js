import { action, decorate, observable } from 'mobx';

export class AddDishStore {
    form = {};

    updateData = (value, prop) => {
        this.form[prop] = value;
    }
}

decorate(AddDishStore, {
    form: observable,
    updateData: action,
});

export const addDishStore = new AddDishStore();