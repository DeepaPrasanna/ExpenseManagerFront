/* form for creating expense category

*/
import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../constants/apiConstants";

export const CreateExpenseCategoryForm = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        successMessage: null,
        errorMessage: null,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmitClick = (e) => {
        e.preventDefault();
        //call to the create expense category API
        sendDetailsToServer();
        //after submit, modal window to be closed
        props.toggle();

    };


    const sendDetailsToServer = async () => {
        const payload = {
            name: formData.name,
        };
        await axios
            .post(API_BASE_URL + "expensesCategory", payload)
            .then(function (response) {
                if (response.data.code === 200) {
                    setFormData((prevState) => ({
                        ...prevState,
                        successMessage:
                            "New expense record created successfully..",
                    }));

                } else {
                    setFormData((prevState) => ({
                        ...prevState,
                        errorMessage:
                            "New expense category record cannot be created. Unsuccessful !!!",
                    }));

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <form>
            <div className="form-group">
                <label htmlFor="name" className="float-left">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={handleChange}
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
    );
};
export default CreateExpenseCategoryForm;
