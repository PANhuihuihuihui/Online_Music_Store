import React, { useState } from 'react'
import './css/Cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const handleDelete = ( id ) => {
    let currCart = JSON.parse(localStorage.getItem("cart"))
    let newCart = []

    for(let i = 0; i<currCart.length; ++i){
        if(i !== id){
            newCart.push(currCart[i])
        }
    }
    localStorage.setItem('cart', JSON.stringify(newCart))
    alert('Cart Item Successfully Deleted!')
    window.location.reload()
}

function Cart() {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")))


    let totalPrice = 0
    if(cartItems !== null){
        for(let i = 0; i<cartItems.length; ++i){
            totalPrice += (cartItems[i].data.price * cartItems[i].qty)
        }
    }

    return (
        <div className="cart-mainContainer">
            <div className="cart-container">
                <p className="cart-title">Cart</p>
                <hr className="hr" />
                {
                    cartItems.map((cartItem, index) => (
                        <div className="item-details-container">
                            <img className="item-img" src={cartItem.data.music_image} alt="music-item" />
                            <div className="item-details-text">
                                <div>
                                    <p>{cartItem.data.name}</p>
                                    <p>{cartItem.data.composer}</p>
                                    <p>HKD {cartItem.data.price}</p>
                                </div>
                                <div className="qty-icon-container">
                                    <p>Quantity: {cartItem.qty}</p>
                                    <FontAwesomeIcon
                                        onClick = { () => handleDelete(index)} 
                                        className="del-icon" icon={faTrash}/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div style={{
                "display": "flex",
                "flexDirection": "column",
                "padding": "30px 10px"
            }}>
                <p style={{
                    "margin-bottom": "20px",
                }}> Total Price:{totalPrice} </p>
                <Link to="/checkout"><button className="checkout-button">Checkout</button></Link>
                <Link to="/"><button className="checkout-button"> Back </button></Link>
            </div>
        </div>
    )
}

export default Cart;

