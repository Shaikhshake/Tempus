import React from 'react';
import { Link } from "react-router-dom";

function Invoice_hero(){
    return(
        <div className='invoice-hero'>
            <h1>Invoice</h1>
            <h4>Click on the log to get details...</h4>
            <div className='switch-page-bInvoice'>
                <div>
                    <Link to="/b-employee"><p className='p1-bInvoice'>Employee Info</p></Link>
                </div>
                <div>
                    <Link to="/b-inventory"><p className='p2-bInvoice'>Inventory</p></Link>
                </div>  
                <div className='switched-div-bInvoice'>
                    Invoice
                </div>  
            </div>
            <div className='input-parameters-bInvoice'>
                    <p className='serial-no-bInvoice'>SL.No</p>
                <div>
                    <p>Name</p>
                </div>
                <div>
                    <p>Company Name</p>
                </div>
                <div>
                    <p>Invoice No.</p>
                </div>
                <div>
                    <p>Date</p>
                </div>
                <div>
                    <p>Paid</p>
                </div>
                <div>
                    <p>Comments</p>
                </div>
            </div>
        </div>
    )
}

export default Invoice_hero;