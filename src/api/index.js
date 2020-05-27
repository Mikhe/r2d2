import Dish from '../assets/images/dish.svg';

const timeout = 1000;
export const mockDishes =[{
    id: 1,
    imgSrc: Dish,
    category: 'meat',
    title: 'Roasted Butternut Pumpkin, Shiitake Mushroom and Haloumi Salad',
    description: 'A hearty mix of fresh greens, roasted vegetables and golden haloumi makes up this tasty winter salad.',
    price: 100,
    people: 1,
    ingredients: [{
        name: 'greens',
        kcl: 50
    }, {
        name: 'vegetables',
        kcl: 100
    }, {
        name: 'golden halouomi',
        kcl: 93
    }]
}, {
    id: 2,
    imgSrc: Dish,
    category: 'meat',
    title: 'Slow-cooked, Italian Beef Cheek Ragú with Pappardelle',
    description: 'Slow-cooked beef cheek ragù. Serve with just-cooked pappardelle and sprinkle with lashings of Parmesan, of course.',
    price: 100,
    people: 2,
    ingredients: [{
        name: 'beef',
        kcl: 150
    }, {
        name: 'parmesan',
        kcl: 50
    }]
}, {
    id: 3,
    imgSrc: Dish,
    category: 'meat',
    title: 'Chicken Cotoletta with Brussels Sprouts, Rocket and Hazelnut Salad',
    description: 'The super-crispy outer also happens to be gluten free.',
    price: 100,
    people: 2,
    ingredients: [{
        name: 'chicken',
        kcl: 150
    }, {
        name: 'vegetables',
        kcl: 100
    }]
}, {
    id: 4,
    imgSrc: Dish,
    category: 'meat',
    title: 'Roasted Butternut Pumpkin, Shiitake Mushroom and Haloumi Salad',
    description: 'A hearty mix of fresh greens, roasted vegetables and golden haloumi makes up this tasty winter salad.',
    price: 100,
    people: 1,
    ingredients: [{
        name: 'greens',
        kcl: 50
    }, {
        name: 'vegetables',
        kcl: 100
    }, {
        name: 'golden halouomi',
        kcl: 93
    }]
}, {
    id: 5,
    imgSrc: Dish,
    category: 'meat',
    title: 'Slow-cooked, Italian Beef Cheek Ragú with Pappardelle',
    description: 'Slow-cooked beef cheek ragù. Serve with just-cooked pappardelle and sprinkle with lashings of Parmesan, of course.',
    price: 100,
    people: 2,
    ingredients: [{
        name: 'beef',
        kcl: 150
    }, {
        name: 'parmesan',
        kcl: 50
    }]
}, {
    id: 6,
    imgSrc: Dish,
    category: 'meat',
    title: 'Chicken Cotoletta with Brussels Sprouts, Rocket and Hazelnut Salad',
    description: 'The super-crispy outer also happens to be gluten free.',
    price: 100,
    people: 2,
    ingredients: [{
        name: 'chicken',
        kcl: 150
    }, {
        name: 'vegetables',
        kcl: 100
    }]
}];

class API {
    constructor(){
        this.dishes = mockDishes;
    }

    fetchDishes({ page, pageSize }) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.dishes.map(dish => ({...dish, id: dish.id + page * pageSize})));
            }, timeout);
        });
    }

    searchDish(search) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const searchBy = search.toLowerCase().split(' ');

                resolve(this.dishes.filter(dish => {
                    let match = false;

                    searchBy.some(keyword => {
                        return match = dish.title.toLocaleLowerCase().includes(keyword);
                    });

                    if (match) {
                        return true;
                    }

                    return !!dish.ingredients.filter(ingredient => {
                        searchBy.some(keyword => {
                            return match = ingredient.name.toLocaleLowerCase().includes(keyword);
                        });
                    }).length
                }));
            }, timeout);
        });
    }
}

export const api = new API();