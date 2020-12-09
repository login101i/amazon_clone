import React, { useState, useEffect } from 'react'
import { SliderData } from './SliderData'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import './imageSlider.css'
// import { useForkRef } from '@material-ui/core'

export default function ImageSlider() {
    const [current, setCurrent] = useState(0)
    const length = SliderData.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    // let activeElement=0
    // let changeTime=4000
    // function changeElement() {
    //     activeElement++
    //     if (activeElement === length) {
    //       activeElement=0
    //     }

    // }
    // setInterval(changeElement, changeTime)





    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null
    }

    return (

        <div>
            <FaArrowLeft className="left-arrow" onClick={nextSlide} />
            <section className="slider">
                {SliderData.map((item, index) => {
                    console.log(index)
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (<img src={item.image} alt="travel with us"
                                className="image"
                            />)}

                        </div>

                    )


                })}
            </section>
            <FaArrowRight className="right-arrow" onClick={prevSlide} />
        </div>

    )
}
