import Navbar from '../../Navbar/Navbar';
import '../../User/user.css'; 
import React, { useState } from "react";
import {Link, useHistory} from "react-router-dom";



const SignUp = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const PostData = (event) => {
        event.preventDefault()
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email
            })
        }).then(res => res.json())
        .then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                history.push('/Login');
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <React.Fragment>
        <Navbar page="signupPage"/>
        <div className="auth-inner">
        <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)} />
            </div>

            {/* <div className="form-group">
                <label>Last name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Last name"
                     />
            </div> */}

            <div className="form-group">
                <label>Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}  />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Enter password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}  />
            </div>

            <button 
                className="btn btn-primary btn-block"
                onClick={PostData}
                >
                    Sign Up
            </button>
            <p className="forgot-password text-right">
                Already registered? <Link to="/Login">Login</Link>
            </p>
        </form>
        </div>
        </React.Fragment>

    );
};

export default SignUp;
