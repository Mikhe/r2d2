import React from 'react';

function Dish({ dish }) {
    const { title, imgSrc, description, category, kcl, price, people } = dish;

    return (
        <div className="dish-list-item">
            <img src={imgSrc} />
            <div className="dish-list-item-content">
                <div className="dish-list-item-sticker" />
                <div className="dish-list-item-container">
                    <div className="dish-list-item-head">
                        <div>{category}</div>
                        <div>{kcl}{' '}KCL</div>
                    </div>

                    <div className="dish-list-item-body">
                        <div className="dish-list-item-title">
                            {title}
                        </div>

                        <div className="dish-list-item-description">
                            {description}
                        </div>
                    </div>

                    <div className="dish-list-item-footer">
                        <div className="dish-list-item-price">
                            <div className="dish-list-item-price-currency">$</div>
                            {price}
                        </div>

                        <div className="dish-list-item-people">
                            {`For ${people} ${people === 1 ? 'person' : 'persons'}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dish;