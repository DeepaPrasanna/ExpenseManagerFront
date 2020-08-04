import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import axios from 'axios';
import { setUserSession } from '../../Utils/Common';

import { API_BASE_URL } from '../../constants/apiConstants';
import { withRouter, Link } from "react-router-dom";

import './LoginForm.css';

function LoginForm(props) {


    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: "",
        errorMessage: "",
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        sendDetailsToServer();

    }
    const sendDetailsToServer = () => {
        if (state.email.length && state.password.length) {

            const payload = {
                "email": state.email,
                "password": state.password,

            }

            axios.post(API_BASE_URL + 'login', payload,)
                .then(function (response) {
                    // console.log(response);
                    // console.log((JSON.parse(response.config.data)).email);

                    if (response.status === 200) {
                        setState(prevState => ({
                            ...prevState,
                            successMessage: 'Login successful. Redirecting to home page..'
                        }))
                        setUserSession(response.data.token, (JSON.parse(response.config.data)).email);

                        props.history.push('/dashboard');

                    }

                })
                .catch(function (error) {
                    console.log(error);
                    setState(prevState => ({
                        ...prevState,
                        errorMessage: 'Username/Password doesn\'t match'
                    }))
                });
        } else {
            setState(prevState => ({
                ...prevState,
                errorMessage: 'Please enter username/Password'
            }))
        }

    }



    return (
        <div className="container">
            <div className="row">

                <div className="col-sm-2"></div>
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-4 mt-3">
                    <div className="p-2">
                        <p className="heading"><strong>Log </strong>In</p>
                        <p className="main text-secondary">NetTantra</p>
                    </div>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="userEmail" className="col-sm-2 p-0 col-form-label text-right text-secondary">Email</label>
                            <div className="col-sm-10">
                                <input type="email"
                                    className="form-control rounded-0"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    // placeholder="Enter your email"
                                    value={state.email}
                                    onChange={handleChange}
                                />
                            </div>

                        </div>
                        <div className="form-group row">
                            <label htmlFor="userPassword" className="col-sm-2 p-0 col-form-label text-right text-secondary">Password</label>
                            <div className="col-sm-10">

                                <input type="password"
                                    className="form-control rounded-0"
                                    id="password"
                                    // placeholder="Enter your password"
                                    value={state.password}
                                    onChange={handleChange}
                                />
                                <small id="forgetPassword" className="form-text text-primary text-left">Forget Your password?</small>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block rounded-pill"
                                    onClick={handleSubmitClick}

                                >
                                    Log In  <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                        {state.successMessage}
                    </div>
                    <div className="alert alert-danger mt-2" style={{ display: state.errorMessage ? 'block' : 'none' }} role="alert">
                        {state.errorMessage}
                    </div>
                </div>
                <div className="col-sm-2"></div>

            </div>
            <div className="row">
                <div className="col-sm-2"></div>

                <div className="col-sm-8 mx-auto form secondRow">

                    <h4><p className="signUpText text-secondary p-2">Or Sign in with </p></h4>
                </div>

                <div className="col-sm-2"></div>

            </div>
            <div className="row">
                <div className="col-sm-4"></div>

                <div className="col-sm-4 mx-auto form secondRow icon-group">

                    <p className="signUpText text-primary">Create another account</p>

                </div>

                <div className="col-sm-4"></div>

            </div>
            <div className="row">
                <div className="col-sm-2"></div>

                <div className="col-sm-8 mx-auto form secondRow">

                    <hr />
                    <div>
                        <p className="text-secondary pt-1 pb-2">In order to sign up to <strong className="home">NetTantra</strong>'s account,you have to be invited by its admin</p>
                    </div>
                    <hr />
                </div>

                <div className="col-sm-2"></div>

            </div>
            <div className="row">
                <div className="col-sm-4"></div>

                <div className="col-sm-4 mx-auto form secondRow">

                    <p className="signUpText text-secondary p-2">Don't have an account? <Link to="/register"><span className="text-primary">Register</span></Link></p>
                </div>

                <div className="col-sm-4"></div>

            </div>
        </div>


    )
}
export default withRouter(LoginForm);
