import React from 'react';
import { Link } from "react-router-dom";

function Invoice_hero(){
    return(
        <div className='fInvoice-hero'>
            <h1>Rates & Invoice</h1>
            <h4>Click on the log to get details...</h4>
            <div className='switch-page-fInvoice'>
                <div>
                    <Link to="/f-employer"><p className='p1-fInvoice'>Customer Info</p></Link>
                </div>
                <div>
                    <Link to="/f-timesheet"><p className='p1-fEmployer'>Time Sheet</p></Link>
                </div>
                <div className='switched-div-fInvoice'>
                    Rates & Invoice
                </div>  
            </div>
            <div className='input-parameters-fInvoice'>
                    <p className='serial-no-fInvoice'>SL.No</p>
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