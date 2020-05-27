import React from 'react';
import { observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';

import './styles/dishes.scss';
import { dishesStore } from './store/dishes.store';
import Dish from './dish';

const Dishes = observer(() => {
    const { dishes, fetchDishes } = dishesStore;

    return (
        <article>
            <InfiniteScroll
                className="dish-list"
                dataLength={dishes.length}
                next={fetchDishes}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {dishes.map(dish => (
                    <Dish dish={dish} key={dish.id} />
                ))}
            </InfiniteScroll>
        </article>
    );
});

export default Dishes;