import React, { Component } from 'react'  
import {Helmet} from "react-helmet";
import { Translate } from "react-localize-redux";

function ErrorComponent({error}){
    if (error){
        return(
            <div className="text-center p-t-12">
                <span className="txt1">
                    Invalid login
                </span>
            </div>
        );
    }
    else {
        return(<div></div>);
    }
}

export class Login extends Component {  
    constructor(props) {
        super();
        this.state = { username:'', password:'', error:false };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUsernameChange(event) {
        var tmpState = this.state;
        tmpState.username = event.target.value;
        this.setState(tmpState);
    }
    handlePasswordChange(event) {
        var tmpState = this.state;
        tmpState.password = event.target.value;
        this.setState(tmpState);
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.username.length > 0 && this.state.password.length > 0){
            localStorage.setItem('username', this.state.username);
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWluaXN0cmF0b3IiLCJyb2xlIjoiMiIsImVtYWlsIjoiY29udGFjdHNAYTN0cmFuc3RlY2guY29tIiwidmVuZG9ySWQiOiIxIiwidXNlcklkIjoiMSIsInByb2ZpbGVJZCI6IjEiLCJuYmYiOjE2MDAyMjM2ODMsImV4cCI6MTYwMDgyODQ4MywiaWF0IjoxNjAwMjIzNjgzfQ.Z9biq2jkhOZquGnrQITEGGLGl1U7RQONRvNXMCzlD68');
            this.props.func(true);
        }
        else {
            var tmpState = this.state;
            tmpState.error = true;
            this.setState(tmpState);
        }
            
    }
    render() {  
        return (
            <>
                <Helmet>
                    <script src="/assets/vendor/jquery/jquery-3.2.1.min.js"></script>
                    <script src="/assets/vendor/bootstrap/js/popper.js"></script>
                    <script src="/assets/vendor/bootstrap/js/bootstrap.min.js"></script>
                    <link rel="stylesheet" type="text/css" href="/assets/vendor/bootstrap/css/bootstrap.min.css"/>
                    <link rel="stylesheet" type="text/css" href="/assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>
                    <link rel="stylesheet" type="text/css" href="/assets/css/login_util.css"/>
                    <link rel="stylesheet" type="text/css" href="/assets/css/login_main.css"/>
                </Helmet>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src="/assets/img/img-01.png" alt="IMG"/>
                            </div>

                            <form className="login100-form validate-form" onSubmit={this.handleSubmit}> 
                                <span className="login100-form-title">
                                    {<Translate id="login.loginHeadText" />}
                                </span>

                                <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="text" value={this.state.username} onChange={this.handleUsernameChange} placeholder="Email"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate = "Password is required">
                                    <input className="input100" type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password"/>
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>
                                
                                <div className="container-login100-form-btn">
                                    <input type="submit" value="Login" className="login100-form-btn"/>
                                </div>
                                
                                <ErrorComponent error={this.state.error}/>
                                <div className="text-center p-t-136">
                                    <p className="txt2">
                                        By C2LS
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
            )  
        }  
    }  
      
export default Login