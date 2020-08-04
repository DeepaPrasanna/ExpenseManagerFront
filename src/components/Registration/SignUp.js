import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../constants/apiConstants';
import { withRouter } from "react-router-dom";

import './SignUp.css';


function SignUpForm(props) {

    const [state, setState] = useState({

        password: "",
        name: "",
        teamName: "",
        agreement: "",
        successMessage: null,
        errorMessage: null
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
        if (props.location.data.email.length && state.password.length) {

            const payload = {
                "email": props.location.data.email,
                "password": state.password,
                "name": state.name,
                "user_type": "admin",
                "user_status": "online"
            }
            axios.post(API_BASE_URL + 'users', payload)
                .then(function (response) {
                    console.log(response);
                    if (response.status === 201) {
                        setState(prevState => ({
                            ...prevState,
                            'successMessage': 'Registration successful. Redirecting to login page..'
                        }))

                        props.history.push('/login');

                    } else {
                        setState(prevState => ({
                            ...prevState,
                            errorMessage: 'Registration unsuccessfull !!'
                        }))
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    setState(prevState => ({
                        ...prevState,
                        errorMessage: 'Registration unsuccessfull !!'
                    }))
                });
        } else {
            setState(prevState => ({
                ...prevState,
                errorMessage: 'Please enter the fields'
            }))
        }

    }



    return (
        <div className="container">
            <div className="row">

                <div className=" mx-auto form mt-5">
                    <div className="p-2">
                        <p className="heading"><strong>Complete your account details</strong></p>

                    </div>
                    <form>
                        {/*<div className="form-group label">
                            <label for="exampleInputEmail1" className="text-right">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={state.email}
                                onChange={handleChange} />

                        </div>*/}
                        <div className="form-group label">
                            <label htmlFor="formGroupExampleInput">FullName</label>
                            <input type="text" className="form-control" id="name" value={state.name}
                                onChange={handleChange} />
                        </div>
                        <div className="form-group label">
                            <label htmlFor="exampleInputPassword1" className=" p-0 col-form-label text-right">Password</label>


                            <input type="password"
                                className="form-control rounded-0 "
                                id="password"
                                data-toggle="password"
                                data-eye-open-className="fa-eye"
                                value={state.password}
                                onChange={handleChange}
                            />

                        </div>
                        <div className="form-group label">
                            <label for="formGroupExampleInput2">Team Name</label>
                            <input type="text" className="form-control" id="teamName" value={state.teamName}
                                onChange={handleChange} />

                        </div>
                        <div className="form-group form-check p-0">
                            <input type="checkbox" className="form-check-input" id="agreement" value={state.agreement}
                                onChange={handleChange} />
                            <label className="form-check-label" for="exampleCheck1">I agree to the<span className="text-primary"> Terms of Use</span> and <span className="text-primary">Privacy Policy</span></label>
                        </div>
                        <div className="button">
                            <button
                                type="submit"
                                className="btn btn-primary rounded-pill"
                                onClick={handleSubmitClick}

                            >
                                Continue
                        </button>
                        </div>


                    </form>
                    <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                        {state.successMessage}
                    </div>
                    <div className="alert alert-danger mt-2" style={{ display: state.errorMessage ? 'block' : 'none' }} role="alert">
                        {state.errorMessage}
                    </div>
                </div>

            </div>




        </div>


    )
}
export default withRouter(SignUpForm);
