import React from 'react'


import './product.css'
import { useStateValue } from './StateProvider'

export default function Product({id, title, price, rating, image }) {

    const [{basket}, dispatch] = useStateValue()

    console.log(`to jest koszyk: `, basket)



    const addToBasket = () => {
        console.log('aaa')
        // dispatch the item
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })

    }

    return (

        <div className="product">
            <div className="product__info">
                <p className="text">{title}</p>
                <p className="product__price">

                    <strong>{price}</strong>
                    <small>zł</small>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>*</p>

                    ))}
                </div>
            </div>

            <img
                src={image}
                alt=""
            />
            <button onClick={addToBasket}>Dodaj do koszyka</button>


        </div>
    )
}
