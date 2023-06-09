import React from 'react';

function Header(){
    return(
        <nav className="navbar-bhome">
            <div className='left-section-bhome'>
                <img className='logo-bhome' src="./images/TEMPUS_logo2.png" alt="LOGO"/>
                <a href="#"><h2>TEMPUS</h2></a>
            </div>
            <div className='right-section-bhome'>
                <ul className='nav-list-bhome'>
                    <li className='nav-item-bhome'><a href="#">About</a></li>
                    <li className='nav-item-bhome'><a href="#footer-bhome">Contact</a></li>
                    <div className='profile-container-bhome'>
                        <li className='nav-item-bhome'><img className="profile-icon-bhome" alt="profile" src="./images/profile-icon.jpg"/></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Header;