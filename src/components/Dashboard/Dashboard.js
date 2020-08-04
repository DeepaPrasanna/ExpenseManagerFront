/*Dashboard of the logged in user,
contains logout button
shows all the expenses,

*/


import React from "react";
import { getUser, getToken, removeUserSession } from "../../Utils/Common";
import axios from "axios";
import { API_BASE_URL } from "../../constants/apiConstants";
import Sidebar from "./Sidebar";
import ShowExpense from "./ShowExpense";

function Dashboard(props) {

    //retrieving the user and the created token during the login from the local storage
    const user = getUser();
    const token = getToken();
    // console.log(getToken())
    // console.log(user);

    // handle click event of logout button
    const handleLogout = () => {

        sendDetailsToServer(); // call to the logout API
        removeUserSession(); // removes the user details from the local storage after logout
        props.history.push("/login"); // route to the login page
    };

    const sendDetailsToServer = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get(API_BASE_URL + "logout", config)
            .then(function (response) {
                if (response.status === 200) {
                    return response;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />

                <main role="main" className="w-100 pt-3 px-4 pl-5">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                        <h1 className="h2">Expenses</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            Welcome {user}!
                            <div className="btn-group mr-2">
                                <button
                                    className="btn btn-sm btn-outline-secondary"
                                    onClick={handleLogout}
                                >
                                    Logout
                            </button>
                            </div>
                        </div>
                    </div>
                    {/*component showing all the expenses */}
                    <ShowExpense title="Create Expense" />
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
