import React from 'react'
import CardImg from '../img/cardTopImg.png'
import '../styles/card/cardTop/cardTop.css'

export default function CardTop() {
    return (
        <div className='cardTop'>
            <img className='cardImg' src={CardImg} alt="" />
        </div>
    )
}
