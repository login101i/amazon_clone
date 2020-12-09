import React, { useEffect } from 'react'
import './home.css'
import Product from './Product'
import ImageSlider from './ImageSlider'


// ____________________________________ animacja lider____________________________



// parametry, które mogą się zmieniać dajemy na samej górze
let activeElement = 0;
let changeTime = 3000;
// pobieramy cztery elementy, na których pracujemy. To jest podstawa.
const imgReference = document.querySelector('.color');

//informacje o tablicach o elementach pobieranych
const images = [`./assets/serduszka.jpg`, `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpCwSv81Q8CHHG3ETynYYTXk7_L29UAnh-Q&usqp=CAU`, `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpCwSv81Q8CHHG3ETynYYTXk7_L29UAnh-Q&usqp=CAU`];



// ____________________________________ animacja lider____________________________



export default function Home() {

 
    return (
        <>
            <ImageSlider />
            <div className="home">

                <div className="home__container">
                   
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
                        title="Super Motor"
                        price={199.99}
                        rating={5}
                        image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpCwSv81Q8CHHG3ETynYYTXk7_L29UAnh-Q&usqp=CAU'}
                    />


                </div>
                <div className="home__row">
                    <Product
                        id="222655626"
                        title="Super Monitor"
                        price={199.99}
                        rating={5}
                        image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpCwSv81Q8CHHG3ETynYYTXk7_L29UAnh-Q&usqp=CAU'}
                    />
                    <Product
                        id="32634445626"
                        title="Wycieczka w góry"
                        price={199.99}
                        rating={5}
                        image={'https://images.wallpapersden.com/image/download/snowy-mountains_a21paWeUmZqaraWkpJRnamtlrWZpaWU.jpg'}
                    />

                    <Product
                        id="33222246626"
                        title="Super Motor"
                        price={199.99}
                        rating={5}
                        image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpCwSv81Q8CHHG3ETynYYTXk7_L29UAnh-Q&usqp=CAU'}
                    />




                </div>
                <div className="home__row">
                    <Product
                        id="325227266626"
                        title="Super Monitor"
                        price={199.99}
                        rating={5}
                        image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwpCwSv81Q8CHHG3ETynYYTXk7_L29UAnh-Q&usqp=CAU'}
                    />

                </div>
            </div>
        </>
    )
}
