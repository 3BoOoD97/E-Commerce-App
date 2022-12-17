import React from 'react'
import './Footer.scss'
function Footer() {
    return (
        <div className='footer'>
        <div className='top'>
        <div className='item'>
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
        </div>

        <div className='item'>
        <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
        </div>

        <div className='item'>
        <h1>About</h1>
            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</span>
        </div>

        <div className='item'>
        <h1>Contact</h1>
        <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</span>
        </div>
</div>
        <div className='bottom'>
            <div className='left'>
            <span className='logo'>LAMASTORE</span>
            <span className='copyright'>All rights reserved</span>
            </div>
            <div className='right'>
            <img src="/img/payment.png" alt="" />
            </div>
        </div>


        </div>
    )
}

export default Footer