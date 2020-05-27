import React from 'react';
import { observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { createCn } from 'bem-react-classname';

import './styles/dishes.scss';
import { dishesStore } from '../../stores/dishes.store';
import DishCategory from './dish-category';
import Dish from './dish';
import Loading from '../../uikit/loading';

const Dishes = observer(() => {
    const { dishes, fetchDishes, foundDishes, searchBy, isLoading } = dishesStore;
    const cn = createCn('dish-list');
    let currentDishes = dishes;
    let hasMore = true;
    let hasDishes = true;

    if (searchBy) {
        currentDishes = foundDishes;
        hasMore = false;
        hasDishes = !!currentDishes.length;
    }

    return (
        <article>
            <DishCategory className={cn('category')}/>

            {searchBy && isLoading && <Loading />}

            {hasDishes && (
                <InfiniteScroll
                    className={cn()}
                    dataLength={currentDishes.length}
                    next={fetchDishes}
                    hasMore={hasMore}
                    loader={<Loading />}
                >
                    {currentDishes.map(dish => (
                        <Dish dish={dish} key={dish.id} className={cn('item')} />
                    ))}
                </InfiniteScroll>
            )}

            {!hasDishes && !isLoading && (
                <h4 className={cn({ empty: true })}>
                    Found nothing :(
                </h4>
            )}
        </article>
    );
});

export default Dishes;