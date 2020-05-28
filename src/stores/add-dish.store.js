import { action, decorate, observable } from 'mobx';

export class AddDishStore {
    file = null;

    updateFile = (file) => {
        this.file = file;
    }
}

decorate(AddDishStore, {
    file: observable,
    updateFile: action,
});

export const addDishStore = new AddDishStore();