import React, { useEffect, useState } from 'react'
import './orders.css'
import Order from './Order'

import { db } from './firebase'
import { useStateValue } from './StateProvider'


export default function Orders(props) {

    const [orders, setOrders] = useState([])

    const [{ basket, user }, dispatch] = useStateValue()

    let subtotal = 0
    basket.map(item => (subtotal += item.price))
    console.log(subtotal)


    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([])
        }

    }, [user])
    console.log(orders)

    return (
        <div className="orders">
            <h1>Twoje zamówieniaaaaaaaa</h1>
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>



        </div>
    )
}
