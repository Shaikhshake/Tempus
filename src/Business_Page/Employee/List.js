import React from 'react';
import { Link } from "react-router-dom";

function List({ setIsAdding, employees, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table-bEmployee'>
            <div className='employee-hero'>
                <h1>Employee Information</h1>
                <h4>Click on the log to get details...</h4>
                <div className='switch-page-bEmployee'>
                    <div className='switched-div-bEmployee'>
                        Employee Info
                    </div>
                    <div>
                        <Link to="/b-inventory"><p className='p1-bEmployee'>Inventory</p></Link>
                        {/*<Link to="/b-inventory"><p className='p1-bEmployee'>Inventory</p></Link>*/}
                    </div>
                    <div>
                        <Link to="/b-invoice"><p className='p2-bEmployee'>Invoice</p></Link>
                        {/*<Link to="/b-invoice"><p className='p2-bEmployee'>Invoice</p></Link>*/}
                    </div>    
                </div>
            </div>
            <table className='striped-table-bEmployee'>
                <thead>
                    <tr>
                        <th>Employee No.</th>
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
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.mobileno}</td>
                                <td>{employee.email}</td>
                                <td>{formatter.format(employee.salary)}</td>
                                <td>{employee.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="muted-button-bEmployee"
                                    >
                                        <img className='edit-logo-bEmployee' alt="edit" src="./images/edit-button.png"/>
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="muted-button-bEmployee"
                                    >
                                        <img className='delete-logo-bEmployee' alt="delete" src="./images/delete-button.jpg"/>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={() => setIsAdding(true)} className='round-button-bEmployee'>Add Button</button>
        </div>
    )
}

export default List;