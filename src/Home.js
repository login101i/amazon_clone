import React from 'react'
import './home.css'
import Product from './Product'



export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdf9wySxUPYqJxQKB08t_Au6tZPNQUSGHXg&usqp=CAU" alt="" />
            </div>
            <div className="home__row">
                <Product
                    id="32122662526"
                    title="Super Monitor"
                    price={199.99}
                    rating={5}
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpCwSv81Q8CHHG3ETynYYTXk7_L29UAnh-Q&usqp=CAU'}
                />
                <Product
                    id="3662529226626"
                    title="Super Monitor"
                    price={199.99}
                    rating={5}
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpCwSv81Q8CHHG3ETynYYTXk7_L29UAnh-Q&usqp=CAU'}
                />


            </div>
            <div className="home__row">
                <Product
                    id="32542222655626"
                    title="Super Monitor"
                    price={199.99}
                    rating={5}
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpCwSv81Q8CHHG3ETynYYTXk7_L29UAnh-Q&usqp=CAU'}
                />
                <Product
                    id="325222634445626"
                    title="Super Monitor"
                    price={199.99}
                    rating={5}
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpCwSv81Q8CHHG3ETynYYTXk7_L29UAnh-Q&usqp=CAU'}
                />

                <Product
                    id="33252222246626"
                    title="Super Monitor"
                    price={199.99}
                    rating={5}
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpCwSv81Q8CHHG3ETynYYTXk7_L29UAnh-Q&usqp=CAU'}
                />




            </div>
            <div className="home__row">
                <Product
                    id="3252272666626"
                    title="Super Monitor"
                    price={199.99}
                    rating={5}
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpCwSv81Q8CHHG3ETynYYTXk7_L29UAnh-Q&usqp=CAU'}
                />

            </div>
        </div>
    )
}
