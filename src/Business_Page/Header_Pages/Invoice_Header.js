import React from 'react';

function Invoice(){
    return(
        <nav className="navbar-bInvoice">
            <div className='left-section-bInvoice'>
                <img className='logo-bInvoice' src="./images/TEMPUS_logo2.png" alt="LOGO"/>
                <a href="#"><h2>TEMPUS</h2></a>
            </div>
            <div className='right-section-bInvoice'>
                <ul className='nav-list-bInvoice'>
                    <li className='nav-item-bInvoice'><a href="#">About</a></li>
                    <li className='nav-item-bInvoice'><a href="#footer-bInvoice">Contact</a></li>
                    <div className='profile-container-bInvoice'>
                        <li className='nav-item-bInvoice'><img className="profile-icon-bInvoice" alt="profile" src="./images/profile-icon.jpg"/></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Invoice;