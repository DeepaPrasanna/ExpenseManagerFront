/* form for creating expense

*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../constants/apiConstants";

export const CreateExpenseForm = (props) => {
    const [categoryName, setCategoryName] = useState("");

    const [categoryId, setCategoryId] = useState(0);

    const [formData, setFormData] = useState({
        amount: "",
        category: "",
        description: "",
        expenseBill: "",
        successMessage: null,
        errorMessage: null,
        expense_category_id: 0,
    });

    useEffect(() => {
        getNames();
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));

    };
    const handleCategoryId = (e) => {
        const { id, value } = e.target;

        // console.log(e.target.selectedIndex);
        let index = e.target.selectedIndex;
        let el = e.target.childNodes[index]
        let option = el.getAttribute('id');
        console.log(option);
        setCategoryId((prevState) => ({
            ...prevState,
            [id]: option,
        }));
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));

    };

    const handleSubmitClick = (e) => {
        e.preventDefault();
        //call to the create expense API
        sendDetailsToServer();
        //after successful submit, modal window to be closed
    };

    const sendDetailsToServer = async () => {
        if (formData.amount.length && formData.category.length && formData.description.length && formData.expenseBill) {
            // console.log(formData)
            // console.log("hello");
            // console.log(categoryId)
            const payload = {
                amount: formData.amount,
                category: formData.category,
                description: formData.description,
                expense_bill: formData.expenseBill,
                user_id: 1,
                expense_category_id: categoryId.category,
            };
            await axios
                .post(API_BASE_URL + "expenses", payload)
                .then(function (response) {

                    if (response.status === 201) {
                        setFormData((prevState) => ({
                            ...prevState,
                            errorMessage: ""
                            , successMessage: "New expense record created successfully..",
                        }));
                        props.toggle();

                    } else {
                        setFormData((prevState) => ({
                            ...prevState,
                            errorMessage:
                                "New expense record cannot be created. Unsuccessful !!!",
                        }));
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    setFormData((prevState) => ({
                        ...prevState,
                        errorMessage:
                            "New expense record cannot be created. Unsuccessful !!!",
                    }));
                });

            await props.updateExpense();
        }
        else {
            setFormData((prevState) => ({
                ...prevState,
                errorMessage:
                    "Please enter the fields",
            }));
        }
    };

    const renderCategoryNames = () => {
        // getNames();
        return renderNames();
    };
    const getNames = () => {
        axios
            .get(API_BASE_URL + "expensesCategory")
            .then(function (response) {
                if (response.status === 200) {
                    setCategoryName(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const renderNames = () => {
        return categoryName.map((category) => {
            return <option id={category.id}>{category.name}</option>;
        });
    };
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="amount" className="float-left">
                        Amount
        </label>
                    <input
                        type="number"
                        className="form-control"
                        id="amount"
                        onChange={handleChange}
                        required
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="category" className="float-left">
                        Expense Category
        </label>
                    <select className="form-control" id="category" onChange={handleCategoryId} required>
                        {categoryName.length > 0 ? renderCategoryNames() : ""}

                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="description" className="float-left">
                        Description
        </label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="expenseBill" className="float-left" required>
                        Expense Bill
        </label>
                    <input
                        type="number"
                        className="form-control"
                        id="expenseBill"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <button
                        className="form-control btn btn-primary"
                        type="submit"
                        onClick={handleSubmitClick}
                    >
                        Submit
        </button>
                </div>
            </form>
            <div className="alert alert-success mt-2" style={{ display: formData.successMessage ? 'block' : 'none' }} role="alert">
                {formData.successMessage}
            </div>
            <div className="alert alert-danger mt-2" style={{ display: formData.errorMessage ? 'block' : 'none' }} role="alert">
                {formData.errorMessage}
            </div>
        </div>
    );
};
export default CreateExpenseForm;
