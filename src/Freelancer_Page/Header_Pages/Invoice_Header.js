import React from 'react';

function Invoice_Header(){
    return(
        <nav className="navbar-fInvoice">
            <div className='left-section-fInvoice'>
                <img className='logo-fInvoice' src="./images/TEMPUS_logo2.png" alt="LOGO"/>
                <a href="#"><h2>TEMPUS</h2></a>
            </div>
            <div className='right-section-fInvoice'>
                <ul className='nav-list-fInvoice'>
                    <li className='nav-item-fInvoice'><a href="#">About</a></li>
                    <li className='nav-item-fInvoice'><a href="#footer-fInvoice">Contact</a></li>
                    <div className='profile-container-fInvoice'>
                        <li className='nav-item-fInvoice'><img className="profile-icon-fInvoice" alt="profile" src="./images/profile-icon.jpg"/></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Invoice_Header;