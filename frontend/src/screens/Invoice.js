import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import './css/Invoice.css'

function Invoice() {
    const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")))
    const [address, setAddress] = useState(JSON.parse(localStorage.getItem("address")))
    let totalQty = 0;
    let totalPrice = 0
    if(cartItems !== null){
        for(let i = 0; i<cartItems.length; ++i){
            totalPrice += (cartItems[i].data.price * cartItems[i].qty)
            totalQty += cartItems[i].qty
        }
    }

    return (

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

        )
}
export default Invoice;