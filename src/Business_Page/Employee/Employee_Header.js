import React from 'react';

function Employee_Header(){
    return(
        <nav className="navbar-bEmployee">
            <div className='left-section-bEmployee'>
                <img className='logo-bEmployee' src="./images/TEMPUS_logo2.png" alt="LOGO"/>
                <a href="#"><h2>TEMPUS</h2></a>
            </div>
            <div className='right-section-bEmployee'>
                <ul className='nav-list-bEmployee'>
                    <li className='nav-item-bEmployee'><a href="#">About</a></li>
                    <li className='nav-item-bEmployee'><a href="#footer-bEmployee">Contact</a></li>
                    <div className='profile-container-bEmployee'>
                        <li className='nav-item-bEmployee'><img className="profile-icon-bEmployee" alt="profile" src="./images/profile-icon.jpg"/></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Employee_Header;