import React from 'react'

import './checkoutProduct.css'
import { useStateValue } from './StateProvider'
import FlipMove from 'react-flip-move';



export default function CheckoutProduct({ id, image, title, price, rating, hidden }) {

    const [{ basket }, dispatch] = useStateValue()


    const removeFromBasket = () => {
        // removeItem from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id

        })
    }

    return (

        <FlipMove duration={300} easing="ease-in-out">
            <div className="checkoutProduct">
                <img className="checkoutProduct__image" src={image} alt="" />

                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    <p className="checkoutProduct__price">{price} zł</p>
                    <p className="checkoutProduct__rating">
                        {Array(rating).fill().map((_, i) => (
                            <p>*</p>
                        ))}
                    </p>
                    {!hidden &&
                        <button onClick={removeFromBasket}>Remove from basket</button>}
                </div>
            </div>
        </FlipMove>
    )

}
