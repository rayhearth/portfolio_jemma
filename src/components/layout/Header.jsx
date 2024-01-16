import React from 'react';

import { useNavigate } from 'react-router-dom';

const Header = () => {

    let navigate = useNavigate()
    const home = () => { navigate('/home') }
    const about = () => { navigate('/about') }
    const projets = () => { navigate('/projets') }
    const contact = () => { navigate('/contact') }

    return (
        <header className='header main'>
            <nav className="main-nav">
                <ul className='linkContent'>
                    <li className="main-nav-item" onClick={home}>
                        Home
                    </li>
                    <li className="main-nav-item" onClick={about}>
                        Qui-suis je ?
                    </li>
                    <li className="main-nav-item" onClick={projets}>
                        Projets
                    </li>
                    <li className="main-nav-item" onClick={contact}>
                        Contact
                    </li>

                </ul>
                
            </nav>
        </header>
    );
};

export default Header;