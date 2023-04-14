import React from 'react';
import { Link } from "react-router-dom";

/* ALL THE CUSTOMER FOLDER ELEMENTS CLASS NAMES HAVE TO BE CHANGED. CURRENTLY THEY ARE FOLLOWING THE BUSINESS CSS.*/

function List({ setIsAdding, customers, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table'>
            <div className='employer-hero'>
                <h1>Customer Information</h1>
                <h4>Click on the log to get details...</h4>
                <div className='switch-page-fEmployer'>
                    <div className='switched-div-fEmployer'>
                        Customer Info
                    </div>
                    <div>
                        <Link to="/f-timesheet"><p className='p1-fEmployer'>Time Sheet</p></Link>
                    </div>
                    <div>
                        <Link to="/f-invoice"><p className='p2-fEmployer'>Rates & Invoice</p></Link>
                    </div>
                </div>
            </div>
            <table className='striped-table-fEmployer'>
                <thead>
                    <tr>
                        <th>Customer No.</th>
                        <th>Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {customers.length > 0 ? (
                        customers.map((customer, i) => (
                            <tr key={customer.id}>
                                <td>{i + 1}</td>
                                <td>{customer.firstName}</td>
                                <td>{customer.mobileno}</td>
                                <td>{customer.email}</td>
                                <td>{formatter.format(customer.salary)}</td>
                                <td>{customer.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(customer.id)}
                                        className="muted-button-fEmployer"
                                    >
                                        <img className='edit-logo-fEmployer' alt="edit" src="./images/edit-button.png"/>
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(customer.id)}
                                        className="muted-button-Employee"
                                    >
                                        <img className='delete-logo-fEmployer' alt="delete" src="./images/delete-button.jpg"/>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Customers</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={() => setIsAdding(true)} className='round-button-fEmployer'>Add Button</button>
        </div>
    )
}

export default List;