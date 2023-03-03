import React from 'react'
import '../styles/card/card/card.css'
import CardButtons from './CardButtons'
import CardDesc from './CardDesc'
import CardTop from './CardTop'
import Price from './Price'


export default function Card() {
    return (
        <div className='card'>
            <CardTop />
            <CardDesc />
            <Price />
            <CardButtons />



        </div>
    )
}
