import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import Signup from './Signup';
import './css/checkout.css'

const handleAddress = (fullName,companyName,address1,fuladdress2,city,region,country,zip) => {

    let address = [fullName,companyName,address1,fuladdress2,city,region,country,zip]

    localStorage.setItem('address', JSON.stringify(address))


}
function Checkout() {
    const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")))
    // const [address, setAddress] = useState({})
    const [fullName,setName] = useState("")
    const [companyName,setCName] = useState("")
    const [address1,setA1] = useState("")
    const [fuladdress2,setA2] = useState("")
    const [city,setCity] = useState("")
    const [region,setRegion] = useState("")
    const [country,setCountry] = useState("")
    const [zip,setZip] = useState("")
    
    let totalQty = 0;
    let totalPrice = 0
    if(cartItems !== null){
        for(let i = 0; i<cartItems.length; ++i){
            totalPrice += (cartItems[i].data.price * cartItems[i].qty)
            totalQty += cartItems[i].qty
        }
    }
    return (
        <div className="checkout-container">
            {
                loggedInUser === null ? <Signup /> : ""
            }
            <div className="addressDetailsContainer">
                <div>
                    <div className="addressItemContainer">
                        <label for="fullName">Full Name</label>
                        <input 
                            type="text" 
                            placeholder="Required"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="addressItemContainer">
                        <label for="companyName">Company Name</label>
                        <input 
                            type="text" 
                            onChange={(e) => setCName(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="addressItemContainer">
                        <label for="addLin1">Address Line 1</label>
                        <input 
                            type="text" 
                            placeholder="Required"
                            onChange={(e) => setA1(e.target.value)}
                        />
                    </div>
                    <div className="addressItemContainer">
                        <label for="addLin2">Address Line 2</label>
                        <input 
                            type="text" 
                            onChange={(e) => setA2(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="addressItemContainer">
                        <label for="city">City</label>
                        <input 
                            type="text" 
                            placeholder="Required"
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="addressItemContainer">
                        <label for="regionStateDist">Region/State/District</label>
                        <input 
                            type="text" 
                            onChange={(e) => setRegion(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="addressItemContainer">
                        <label for="country"> Country </label>
                        <input 
                            type="text" 
                            placeholder="Required"
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    <div className="addressItemContainer">
                        <label for="postalZip">Postal/Zip Code</label>
                        <input 
                            type="text" 
                            placeholder="Required"
                            onChange={(e) => setZip(e.target.value)}
                        />
                    </div>
                </div>
                {/* <button>Submit Details</button> */}
            </div>
            <div className="orderDetailsContainer">
                <p className="order-title">Your Order</p>
                <div style={{
                    "overflow-y": "auto",
                    "height": "60%"
                }}>
                    {
                        cartItems.map((cartItem) => (
                            <div className="order-item-container">
                                <div className="order-col-name">
                                    <p>{cartItem.data.name}</p>
                                </div>
                                <div className="order-col-qty">
                                    <p>Quantity: {cartItem.qty}</p>
                                </div>
                                <div className="order-col-price">
                                    <p>Price: {cartItem.qty * cartItem.data.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="numbers">
                    <p><b>Total Item Price:</b> {totalPrice} HKD</p>
                    <p><b>Total Quantity:</b> {totalQty}</p>
                    <p><b>Free Standard Shipping </b>0 HKD</p>
                    <p><b>Total Price:</b> {totalPrice} HKD</p>
                </div>
                <Link to="/"><button onClick={() => handleAddress(fullName,companyName,address1,fuladdress2,city,region,country,zip)} >Confirm</button> </Link>
            </div>
        </div>
    )
}
export default Checkout;