import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import "./NewAccount.css";

function NewAccountForm(props) {
    const [state, setState] = useState({
        email: "",
        successMessage: "",
        errorMessage: "",
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const redirectToLogin = () => {
        props.history.push("/login");
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        // console.log(state.email);
        if (!state.email.length) {
            setState((prevState) => ({
                ...prevState,
                errorMessage: "Please enter your Email address",
            }));

            return;
        }

        props.history.push({
            pathname: "/signup",
            data: {
                email: state.email,
            },
        });
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto form p-4 mt-3">
                    <div className="">
                        <p className="head font-weight-normal">
                            <strong>New </strong>
                            <span className="text-secondary ">Account</span>
                        </p>
                        <p className="desc text-secondary">
                            Sign up with your work email address
            </p>
                    </div>
                    <form>
                        <div className="form-group row">
                            <label
                                htmlFor="exampleInputEmail1"
                                className="col-sm-2 p-0 col-form-label text-right text-secondary"
                            ></label>
                            <div className="col-sm-10">
                                <input
                                    type="email"
                                    className="form-control rounded-0"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    value={state.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block rounded-pill"
                                    onClick={handleSignUp}
                                >
                                    Sign up
                </button>
                            </div>
                        </div>
                    </form>
                    <div
                        className="alert alert-danger mt-2"
                        style={{ display: state.errorMessage ? "block" : "none" }}
                        role="alert"
                    >
                        {state.errorMessage}
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row">
                <div className="col-sm-3"></div>

                <div className="col-sm-6 mx-auto form secondRow">
                    <hr />
                </div>

                <div className="col-sm-3"></div>
            </div>
            <div className="row">
                <div className="col-sm-4"></div>

                <div className="col-sm-4 mx-auto form secondRow icon-group">
                    <p className="signUpText">
                        <span className="text-secondary">If you already Signed Up </span>
                        <span
                            onClick={() => redirectToLogin()}
                            className="loginText text-primary"
                        >
                            Log-in here.
            </span>{" "}
                    </p>
                </div>

                <div className="col-sm-4"></div>
            </div>
        </div>
    );
}
export default withRouter(NewAccountForm);
