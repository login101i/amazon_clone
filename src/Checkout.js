import React from 'react'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct'


import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'


export default function Checkout(props) {
    const [{ basket, user }, dispatch] = useStateValue()

    return (
        <div className='checkout'>


            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyNkab0x4mwe0zIdHSY-Mf2ffmD50xQDinA&usqp=CAU"
                    alt="" />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Twój koszyk poniżej:</h2>
                    {basket.map(item => (
                        
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}

                            />

                    ))}
                </div>

            </div>

            <div className="checkout__right">

                <Subtotal />

            </div>




        </div>
    )
}
