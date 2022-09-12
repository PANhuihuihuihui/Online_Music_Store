import React, { useState } from 'react'
import { Link } from "react-router-dom";

import './css/navbar.css'

const handleLogOut = () => {
    console.log('Hi')
    localStorage.removeItem("user")
    alert("Logged Out! Thank you")
    window.location.reload()
}

function NavBar() {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const [query, setQuery] = useState("")
    const currCart = JSON.parse(localStorage.getItem("cart"));

    let cartQty = 0
    if(currCart !== null){
        for(let i = 0; i<currCart.length; ++i){
            cartQty += currCart[i].qty
        }
    }
    
    return (
        <div className="container">
            <Link to="/">
                <img 
                    src="https://i.ibb.co/x67gC5S/download.png" 
                    className="logo"
                    alt="logo"
                />
            </Link>
            <div>
                <input 
                    className="inputSearchBox"
                    type="text"
                    placeholder="Keyword(s)"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Link to={`/?query=${query}`}><button className="searchButton">Search</button></Link>
            </div>
            <div className="buttonContainer">
                { loggedInUser === null ? <Link to="/login"><button className="searchButton">Login</button></Link> : <button className="searchButton" onClick={() => handleLogOut()}>Sign Out</button>}
                { loggedInUser === null ? <Link to="/signup"><button className="searchButton createAccountButton">Create Account</button></Link> : "" }
                <Link to="/cart"><button className="cartButton">Cart</button></Link>
                <div className="cart-qty">{cartQty}</div>
            </div>
        </div>
    )
}

export default NavBar
