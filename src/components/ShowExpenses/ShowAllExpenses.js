/* showing all the expenses in a tabular form
 */
import React from "react";

function ShowAllExpenses(props) {

    const renderTable = () => {
        return props.data.map((expense) => {
            return (
                <tr key={expense.id}>
                    <th scope="row">{expense.id}</th>
                    <td>{expense.category}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.description}</td>
                </tr>
            );
        })
    };

    return (
        <div className="row pl-3">
            {/* Add table here     */}
            <div className="font-weight-bold"> <h4>All Expenses</h4></div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id no</th>
                        <th scope="col">Expense Category</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>{props.data.length ? renderTable() : []}</tbody>
            </table>
        </div>
    );
}
export default ShowAllExpenses;
