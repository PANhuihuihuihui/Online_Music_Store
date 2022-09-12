import React, {useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import './css/Login.css'

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
            window.location = "http://localhost:3000/"
            }
        )
        .catch(err => 
            {   console.error(err);
                alert('Invalid login, please login again');
                window.location.reload()
            })
        
    }
}

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="loginContainer">
            <h1 className="sectionTitle-signin">Login</h1>
            <p className="welcome-signin">Music Store Welcome You Back!</p>
            <div>    
                <label> Username </label>
                <input 
                    type="text"
                    placeholder="Username" 
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>    
                <label> Password </label>
                <input 
                    type="password"
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                style={{"width": "30%", "paddingLeft": "15px"}}
                onClick={() => logInHandler(email, password)}
            >SUBMIT</button>
            {/* <Link to="/signup"> <p className="signup-link">Create an Account!</p> </Link> */}
            <Link to="/signup"><button style={{"width": "30%", "paddingLeft": "15px"}} >CREATE</button> </Link>

            
        </div>
    )
}

export default Login
