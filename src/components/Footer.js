import React from 'react';
import logo from '../images/small_logo.png';

const Footer = () => {
    return (
        < footer >
            < section >
                <div className='company-info'>
                    <img src={logo} alt='' />
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred
                        with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>
                        contact
                    </h3>
                    <ul>
                        <li>adress<br />123 Fake Street, Cityville, State-12345, Country</li>
                        <li>phone <br />+1 555-123-4567</li>
                        <li>email<br /> example@example.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social media</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>instagram</a></li>
                        <li><a href='/'>twitter</a></li>

                    </ul>
                </div>
            </section >
        </footer >
    );

};

export default Footer;