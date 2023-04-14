import React from 'react';
import { Link } from "react-router-dom";

/* CSS STYLING IS COPIED FORM INVOICE. SHOULD CHANGE THE CLASS NAMES ALSO */

function TimeSheet_hero(){
    return(
        <div className='fInvoice-hero'>
            <h1>Time Sheet</h1>
            <h4>Click on the log to get details...</h4>
            <div className='switch-page-fInvoice'>
                <div>
                <Link to="/f-employer"><p className='p1-fInvoice'>Customer Info</p></Link>
                </div>
                <div className='switched-div-fEmployer'>
                    <p className='p1-fEmployer'>Time Sheet</p>
                </div>
                <div>
                    <Link to="/f-invoice"><p className='p2-fEmployer'>Rates & Invoice</p></Link>
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

export default TimeSheet_hero;