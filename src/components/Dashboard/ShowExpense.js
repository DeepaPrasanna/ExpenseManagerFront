/*
contains a create EXpense button having a create expense form in a modal window

*/

import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Form from "../CreateExpenseForm/CreateExpenseForm";
import ExpenseCategoryForm from "../CreateExpenseForm/CreateExpenseCategoryForm";
import ShowAllExpenses from "../ShowExpenses/ShowAllExpenses";
import axios from "axios";
import { API_BASE_URL } from "../../constants/apiConstants";

function ShowExpense(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [data, setData] = useState("");

    const [ExpenseModal, setExpenseModal] = useState(false);
    const expenseToggle = () => setExpenseModal(!ExpenseModal);

    useEffect(() => {
        //fetching all the expenses from the api
        // fetchExpenses();
        axios
            .get(API_BASE_URL + "expenses")
            .then(function (response) {
                // console.log(response);
                // console.log((JSON.parse(response.config.data)).email);

                if (response.status === 200) {
                    console.log(response);
                    setData(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    // const fetchExpenses = () => {
    //     axios
    //         .get(API_BASE_URL + "expenses")
    //         .then(function (response) {
    //             // console.log(response);
    //             // console.log((JSON.parse(response.config.data)).email);

    //             if (response.status === 200) {
    //                 console.log(response);
    //                 setData(response.data);
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    const updateExpense = () => {
        axios
            .get(API_BASE_URL + "expenses")
            .then(function (response) {
                // console.log(response);
                // console.log((JSON.parse(response.config.data)).email);

                if (response.status === 200) {
                    console.log(response);
                    setData(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(data);
    };

    return (
        <div>
            {/* modal window for create Expense form */}
            <div className="row">
                <Button color="primary" onClick={toggle} className="ml-auto col-sm-2">
                    {props.title}
                </Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>{props.title} Form</ModalHeader>
                    <ModalBody>
                        {/* adding a form component  */}
                        <Form toggle={toggle} updateExpense={updateExpense} />
                    </ModalBody>
                    {/*<Button color="primary" onClick={toggle}>Do Something</Button>{' '}*/}
                    <Button color="secondary" className="btn btn-danger" onClick={toggle}>
                        Cancel
          </Button>
                    <ModalFooter></ModalFooter>
                </Modal>

                {/* modal window for create Expense Category */}

                <Button
                    color="primary"
                    onClick={expenseToggle}
                    className="ml-2 col-sm-2"
                >
                    {props.title} Category
        </Button>
                <Modal isOpen={ExpenseModal} toggle={expenseToggle}>
                    <ModalHeader toggle={expenseToggle}>
                        {props.title} Category Form
          </ModalHeader>
                    <ModalBody>
                        {/* adding a form component  */}
                        <ExpenseCategoryForm toggle={expenseToggle} />
                    </ModalBody>
                    {/*<Button color="primary" onClick={toggle}>Do Something</Button>{' '}*/}
                    <Button
                        color="secondary"
                        className="btn btn-danger"
                        onClick={expenseToggle}
                    >
                        Cancel
          </Button>
                    <ModalFooter></ModalFooter>
                </Modal>
            </div>
            <ShowAllExpenses data={data} />
        </div>
    );
}

export default ShowExpense;
