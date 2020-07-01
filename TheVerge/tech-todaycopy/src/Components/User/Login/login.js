import React, {useState} from "react";
import Navbar from '../../Navbar/Navbar';
import '../../User/user.css';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const PostData = (event) => {
        event.preventDefault()
        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,
                email
            })
        }).then(res => res.json())
            // console.log(data)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    history.push('/');
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <React.Fragment>
            <Navbar page="loginPage" />
            <div className="auth-inner">
                <form>
                    <h3>Login</h3>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-primary btn-block"
                        onClick={PostData}>
                            Log in
                    </button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">Password?</a>
                    </p>
                </form>
            </div>
        </React.Fragment>

    );
}

export default Login;
