import React, { useEffect, useState } from 'react'
import './order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'

import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'


export default function Order({ order }) {
    const [disabled, setDisabled] = useState(true)
    const [processing, setProcessing] = useState('')
    const [succeeded, setSucceeded] = useState(false)
    const [clientSecret, setClientSecret] = useState(true)


    const [{ basket, user }, dispatch] = useStateValue()

    let subtotal = 0
    basket.map(item => (subtotal += item.price))
    console.log(subtotal)

    return (
        <div className='order'>
            <h2>Order</h2>


            {/* <p>{moment.unix(order.data.created).format("MMMMM Do YYYY, h:mma")}</p> */}
            <p className="order__id">
                <small>{order.id}</small>
            </p>



            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton

                />
            ))}

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h3>Subtotal wynosi:</h3>

                        <p>
                            Subtotal ({basket?.length} items.): <strong> {subtotal} zł</strong>
                        </p>
                        <button disabled={processing || disabled || succeeded}>

                            <span> {processing ? <p> Processing </p> : "Kup teraz"}</span>

                        </button>
                    </>

                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>

    )
}
