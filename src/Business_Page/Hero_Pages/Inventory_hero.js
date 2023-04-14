import React from 'react';
import { Link } from "react-router-dom";

function Inventory_hero(){
    return(
        <div className='inventory-hero'>
            <h1>Project Inventory</h1>
            <h4>Click on the log to get details...</h4>
            <div className='switch-page-bInventory'>
                <div>
                    <Link to="/b-employee"><p className='p1-bInventory'>Employee Info</p></Link>
                </div>
                <div className='switched-div-bInventory'>
                    Inventory
                </div>
                <div>
                    <Link to="/b-invoice"><p className='p2-bInventory'>Invoice</p></Link>
                </div>    
            </div>
            <div className='input-parameters-bInventory'>
                    <p className='serial-no-bInventory'>SL.No</p>
                <div>
                    <p>Name</p>
                </div>
                <div>
                    <p>Employee ID</p>
                </div>
                <div>
                    <p>Mobile No.</p>
                </div>
                <div>
                    <p>Email ID</p>
                </div>
                <div>
                    <p>Start Time</p>
                </div>
                <div>
                    <p>End Time</p>
                </div>
                <div>
                    <p>Salary</p>
                </div>
            </div>
        </div>
    )
}

export default Inventory_hero;