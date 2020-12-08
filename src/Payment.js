import React, { useState } from 'react'

import './payment.css'

import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'


export default function Payment() {
    const [{ basket, user }, dispatch] = useStateValue()

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [processing, setProcessing] = useState('')
    const [succeeded, setSucceeded] = useState(false)


    const stripe = useStripe()
    const elements = useElements()

    // submit formularza
    const handleSubmit = (e) => {

        e.preventDefault();
        setProcessing(true)


    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }
    // __________________________________

    let subtotal = 0
    basket.map(item => (subtotal += item.price))
    console.log(subtotal)

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout (<Link to='/checkout'> {basket?.length} items</Link>)</h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Adres wysyłki</h3>
                    </div>
                    <div className="payment__address">
                        <p>
                            {user?.email}
                        </p>
                        <p>Sędzin 7</p>
                        <p>Los Agnelse</p>
                    </div>

                </div>
                <div className="payment__section">
                    <div className="payment__title">

                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">

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



                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Metoda Płatności</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">


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
                                    value={0}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />


                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>


                </div>


            </div>
        </div>
    )
}
