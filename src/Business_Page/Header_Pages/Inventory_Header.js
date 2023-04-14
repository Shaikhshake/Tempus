import React from 'react';

function Inventory_Header(){
    return(
        <nav className="navbar-bInventory">
            <div className='left-section-bInventory'>
                <img className='logo-bInventory' src="./images/TEMPUS_logo2.png" alt="LOGO"/>
                <a href="#"><h2>TEMPUS</h2></a>
            </div>
            <div className='right-section-bInventory'>
                <ul className='nav-list-bInventory'>
                    <li className='nav-item-bInventory'><a href="#">About</a></li>
                    <li className='nav-item-bInventory'><a href="#footer-bInventory">Contact</a></li>
                    <div className='profile-container-bInventory'>
                        <li className='nav-item-bInventory'><img className="profile-icon-bInventory" alt="profile" src="./images/profile-icon.jpg"/></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Inventory_Header;