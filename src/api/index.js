import Dish from '../assets/images/dish.svg';

class API {
    constructor(){
        this.dishes = [{
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
            title: 'Roasted Butternut Pumpkin, Shiitake Mushroom and Haloumi Salad',
            description: 'A hearty mix of fresh greens, roasted vegetables and golden haloumi makes up this tasty winter salad.',
            price: 100,
            people: 2,
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
            id: 3,
            imgSrc: Dish,
            category: 'meat',
            title: 'Roasted Butternut Pumpkin, Shiitake Mushroom and Haloumi Salad',
            description: 'A hearty mix of fresh greens, roasted vegetables and golden haloumi makes up this tasty winter salad.',
            price: 100,
            people: 2,
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
            id: 4,
            imgSrc: Dish,
            category: 'meat',
            title: 'Roasted Butternut Pumpkin, Shiitake Mushroom and Haloumi Salad',
            description: 'A hearty mix of fresh greens, roasted vegetables and golden haloumi makes up this tasty winter salad.',
            price: 100,
            people: 2,
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
            title: 'Roasted Butternut Pumpkin, Shiitake Mushroom and Haloumi Salad',
            description: 'A hearty mix of fresh greens, roasted vegetables and golden haloumi makes up this tasty winter salad.',
            price: 100,
            people: 2,
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
            id: 6,
            imgSrc: Dish,
            category: 'meat',
            title: 'Roasted Butternut Pumpkin, Shiitake Mushroom and Haloumi Salad',
            description: 'A hearty mix of fresh greens, roasted vegetables and golden haloumi makes up this tasty winter salad.',
            price: 100,
            people: 2,
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
        }];
    }

    fetchDishes({ page, pageSize }) {
        return this.dishes.map(dish => ({...dish, id: dish.id + page * pageSize }));
    }
}

export const api = new API();