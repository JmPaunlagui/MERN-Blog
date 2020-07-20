import React from 'react'
import { Link } from 'react-router-dom'
const footer = () => {
    return (
        <footer>
            <div className="container">
                <h1>Mitte</h1>
                    <p className="copyright-line">© Copyright 2019 - All rights reserved.</p>
                    <ul className="social-list">
                    <li><Link to="https://twitter.com/realJmPaunlagui"><i className="fa fa-twitter"></i></Link></li>
                        <li><Link to="https://www.linkedin.com/in/john-moises-paunlagui-2b6b31186/"><i className="fa fa-linkedin"></i></Link></li>
                        <li><Link to="https://www.facebook.com/jm.paunlagui"><i className="fa fa-facebook"></i></Link></li>
                        <li><Link to="https://www.instagram.com/jmpaunlagui"><i className="fa fa-instagram"></i></Link></li>
                    </ul>
            </div>
        </footer>
    );
}

export default footer;