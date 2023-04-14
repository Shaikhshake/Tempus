import React from 'react';

function Employer_Header(){
    return(
        <nav className="navbar-fEmployer">
            <div className='left-section-fEmployer'>
                <img className='logo-fEmployer' src="./images/TEMPUS_logo2.png" alt="LOGO"/>
                <a href="#"><h2>TEMPUS</h2></a>
            </div>
            <div className='right-section-fEmployer'>
                <ul className='nav-list-fEmployer'>
                    <li className='nav-item-fEmployer'><a href="#">About</a></li>
                    <li className='nav-item-fEmployer'><a href="#footer-fEmployer">Contact</a></li>
                    <div className='profile-container-fEmployer'>
                        <li className='nav-item-fEmployer'><img className="profile-icon-fEmployer" alt="profile" src="./images/profile-icon.jpg"/></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Employer_Header;