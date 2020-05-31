import { action, computed, decorate, observable } from 'mobx';

export const emptyIngredient = {
    name: '',
    kcl: '',
};

export class AddDishStore {
    ingredientId = 0;
    form = {};
    ingredients = new Map();

    constructor() {
        this.addNewIngredient();
    }

    ingredientsAreValid = () => {
        let invalid = false;

        Array.from(this.ingredients).some(([id]) => {
            const { kcl, name } = this.ingredients.get(id);

            return invalid = !kcl || !name;
        });

        return !invalid;
    };

    get getTotal() {
        const total = { count: 0, kcl: 0 };

        Array.from(this.ingredients).forEach(([id]) => {
            const { kcl, name } = this.ingredients.get(id);

            if (kcl && name) {
                total.count += 1;
                total.kcl += kcl;
            }
        });

        return total;
    };

    get isValid() {
        const { file, title, description, category } = this.form;

        if (!file || !title || !description || !category) {
            return false;
        }

        return this.ingredientsAreValid();
    };

    addNewIngredient = () => {
        if (this.ingredientsAreValid()) {
            this.ingredientId += 1;
            this.ingredients.set(this.ingredientId, emptyIngredient);
        }
    };

    updateData = (value, prop) => {
        this.form[prop] = value;
    };

    setIngredientData = (id, value, name) => {
        if (id) {
            const ingredient = this.ingredients.get(id);

            if (ingredient) {
                this.ingredients.set(id, { ...ingredient, [name]: value || '' });
            }
        }
    };

    removeIngredient = (id) => {
        if (this.ingredients.size !== 1) {
            this.ingredients.delete(id);
        } else {
            this.ingredients.set(id, emptyIngredient);
        }
    };
}

decorate(AddDishStore, {
    form: observable,
    ingredients: observable,
    updateData: action,
    addNewIngredient: action,
    setNewIngredient: action,
    removeIngredient: action,
    isValid: computed,
    getTotal: computed,
});

export const addDishStore = new AddDishStore();