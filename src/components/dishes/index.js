import React from 'react';
import { observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';

import './styles/dishes.scss';
import { dishesStore } from '../../stores/dishes.store';
import Dish from './dish';
import Loading from '../../uikit/loading';

const Dishes = observer(() => {
    const { dishes, fetchDishes, foundDishes, searchBy, isLoading } = dishesStore;
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
            {searchBy && isLoading && <Loading />}

            {hasDishes && (
                <InfiniteScroll
                    className="dish-list"
                    dataLength={currentDishes.length}
                    next={fetchDishes}
                    hasMore={hasMore}
                    loader={<Loading />}
                >
                    {currentDishes.map(dish => (
                        <Dish dish={dish} key={dish.id} />
                    ))}
                </InfiniteScroll>
            )}

            {!hasDishes && !isLoading && (
                <h4 className="dish-list-empty">
                    Found nothing :(
                </h4>
            )}
        </article>
    );
});

export default Dishes;