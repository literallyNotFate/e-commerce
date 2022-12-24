import React, { useState } from 'react'
// Styles
import '../styles/Footer.css';
// Navlinks
import { NavLink } from 'react-router-dom';

// Footer component
export default function Footer() {

    const [email, setEmail] = useState("");

    // Email validation
    const emailValidation = () => {
        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!email || regex.test(email) === false) {
            return false;
        }
        return true;
    }

    // Open modal window (if email is valid)
    const confirmEmail = () => {
        console.log(window.confirm(`Your email is: ${email}.\nSend notifications?`) ? 
            'Thanks!' : 'Maybe next time!');
        setEmail("");
    }

    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='subscribe-and-links'>
                    <div className='subscribe-content'>
                        <h2>Subcribe To Our Newsletter</h2>
                        <input type='email' placeholder='Write your email...' className='subscribe-input'
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                            
                        <button className='subscribe-btn' disabled={!email || !emailValidation()} 
                            onClick={() => confirmEmail()}><i class='material-icons'>subscriptions</i></button>
                            
                        <p>Enter your email address so we can send you notifications of replenishment.</p>
                    </div>

                    <div className='router-links'>
                        <h2>Pages</h2>
                        <div>
                            <NavLink to='/' exact='true' className='pages-link'>Home</NavLink>
                            <NavLink to='/about' exact='true' className='pages-link'>About</NavLink>
                            <NavLink to='/contacts' exact='true' className='pages-link'>Contacts</NavLink>
                            <NavLink to='/feedback' exact='true' className='pages-link'>Feedback</NavLink>
                        </div>
                    </div>
                </div>

                <div className='social-contact'>
                    <div className='social-media'>
                        <h2>Social Media</h2>
                        <div>
                            <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>Youtube</a>
                            <a href='https://twitter.com/' target='_blank' rel='noreferrer'>Twitter</a>
                            <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>Instagram</a>
                            <a href='https://facebook.com/' target='_blank' rel='noreferrer'>Facebook</a>
                            <a href='https://linkedin.com/' target='_blank' rel='noreferrer'>LinkedIn</a>
                        </div>
                    </div>
                    <div className='contact-us'>
                        <h2>Contact Us</h2>
                        <div>
                            <p><i className='icon material-icons'>location_on</i>United States</p>
                            <p><i className='icon material-icons'>mail</i>randomproducts@gmail.com</p>
                            <p><i className='icon material-icons'>phone_in_talk</i>123456789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}