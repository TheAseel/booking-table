
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'
const Header = () => {
    return (
        <header className='header'>
            <section>
                {/* banner texts */}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>little restaurant offers a delightful dining experience in a warm and inviting atmosphere. With a focus on quality and taste.</p>
                    <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                </div>
                {/* banner image */}
                <div className='banner-img'>
                    <img src={bannerImg} alt='' />
                </div>
            </section>
        </header>
    );
};
export default Header;