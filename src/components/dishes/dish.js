import React from 'react';
import  {createCn } from 'bem-react-classname';

function Dish({ dish, className }) {
    const { title, imgSrc, description, category, kcl, price, people } = dish;
    const cn = createCn(className);

    return (
        <div className={cn()}>
            <img src={imgSrc} />
            <div className={cn('content')}>
                <div className={cn('sticker')} />
                <div className={cn('container')}>
                    <div className={cn('head')}>
                        <div>{category}</div>
                        <div>{kcl}{' '}KCL</div>
                    </div>

                    <div className={cn('body')}>
                        <div className={cn('title')}>
                            {title}
                        </div>

                        <div className={cn('description')}>
                            {description}
                        </div>
                    </div>

                    <div className={cn('footer')}>
                        <div className={cn('price')}>
                            <div className={cn('price__currency')}>$</div>
                            {price}
                        </div>

                        <div className={cn('people')}>
                            {`For ${people} ${people === 1 ? 'person' : 'persons'}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dish;