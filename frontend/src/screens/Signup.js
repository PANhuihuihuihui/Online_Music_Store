import React, { useState } from 'react'
import axios from 'axios'
import './css/Login.css'
import { Link } from "react-router-dom";

const signUpHandler = async (email, password) => {
    if(email === '' || password === ''){
        alert("Please do not leave the fields empty")
    }
    else {
        const userDeatils = {
            email,
            password
        };
        await axios.post('http://localhost:8080/v1/user/signup', userDeatils ,{
            'Access-Control-Allow-Origin': "http://localhost:8080"
        })
        .then(res => 
            {   console.log(res)
                alert('Account Successfully Created')
                if (window.location.pathname.includes("signup")) {
                    window.location= "http://localhost:3000/login";
                } else {
                    logInHandler(email, password)
                    
                }
               
            }
        )
        .catch(err => 
            {   console.log(err)
                alert('Account already existed')
                window.location.reload()
            }

        )

    
    }
}

const logInHandler = async (email, password) => {
    
    if(email === '' || password === ''){
        alert("Please do not leave the fields empty")
    }
    else{
        let user
        const userDeatils = {
            email,
            password
        }

        await axios.post('http://localhost:8080/v1/access/login', userDeatils ,{
            'Access-Control-Allow-Origin': "http://localhost:8080"
        })
        .then(res => 
            {user = res.data
            alert('Account Logged In')
            localStorage.setItem('user', JSON.stringify(user))
            window.location.reload()
            }
        )
        .catch(err => 
            {   console.error(err);
                alert('Invalid login, please login again');
                window.location.reload()
            })
        
    }
}

function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="loginContainer signupContainer">
            <h1 className="sectionTitle-signin">Sign Up</h1>
            <p className="welcome-signin">Create an Account for our Music Store!</p>
            <div>    
                <label> Username </label>
                <input 
                    type="text"
                    placeholder="Desired Username" 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>    
                <label> Password </label>
                <input 
                    type="password"
                    placeholder="Desired Password" 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                style={{"width": "30%", "paddingLeft": "15px"}}
                onClick={() => signUpHandler(email, password)}
            >Submit</button>
            <Link to="/login"><button style={{"width": "30%", "paddingLeft": "15px"}}>Back</button></Link>
        </div>
    )
}

export default Signup
