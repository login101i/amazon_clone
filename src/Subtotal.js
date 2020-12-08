import React from 'react'
import './subtotal.css'

import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import {useHistory} from 'react-router-dom'
// import  {getBasketTotal}  from './reducer'
// nie działa mi powyższa funkcja


export default function Subtotal(props) {
    const [{ basket }, dispatch] = useStateValue()
    const history =useHistory()
    // console.log(basket[0].price)

    let subtotal = 0
    basket.map(item => (subtotal += item.price))
    console.log(subtotal)
    // to jest moje rozwiązanie też dobre




    return (
        <>
            <div className="subtotal">
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <h3>Subtotal wynosi:</h3>

                            <p>
                                Subtotal ({basket?.length} items.): <strong> {subtotal} zł</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" />
                              To zamówienie ma również prezent.
                        </small>
                            <button>Go to Chceckout</button>
                        </>

                    )}
                    decimalScale={2}
                    value={0}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />

            </div>
            <button
            onClick={e=>history.push('/payment')}
            >Go to checkout</button>
        </>
    )
}
