import React from 'react'
import '../styles/card/cardPrice/cardPrice.css'

export default function Price() {
    return (
        <div className='cardPriceBox'>
            <div className='priceBox'>
                <svg className='priceLogo' width="15%" height="15%" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5741 0.198201C17.3967 0.0442519 17.1611 -0.025006 16.9284 0.00811123L5.58095 1.62917C5.18161 1.68623 4.88503 2.02823 4.88503 2.43161V5.67376V11.9347C4.40494 11.655 3.84761 11.4939 3.25304 11.4939C1.45934 11.4939 0 12.9532 0 14.747C0 16.5407 1.4593 18 3.25301 18C5.04672 18 6.50605 16.5407 6.50605 14.747V6.37674L16.2325 4.98726V10.3136C15.7524 10.0339 15.1951 9.87282 14.6005 9.87282C12.8068 9.87282 11.3475 11.3322 11.3475 13.1259C11.3475 14.9196 12.8068 16.3789 14.6005 16.3789C16.3942 16.3789 17.8535 14.9196 17.8535 13.1259V4.05266V0.810518C17.8536 0.575533 17.7516 0.35215 17.5741 0.198201Z" fill="#717FA6" />
                </svg>
                <div className='priceText'>
                    <span>Annual Plan</span>
                    <p>$59.99/year</p>
                </div>
                <span className='priceChange'>Change</span>
            </div>
        </div>
    )
}
