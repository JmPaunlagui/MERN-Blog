import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="search-button" href="#"><i className="fa fa-search"></i></a>
                   
                    <form className="form-search">
                        <input type="search" placeholder="Search:"/>
                    </form>

                    <ul className="navbar-nav m-auto">
                        <li className="drop-link">
                            <Link to="/">Home <i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                        </li>
                        <li>
                            <Link to="/category">Feeds</Link>
                        </li>
                        <li>
                            <Link to="/single">Category</Link>
                        </li>

                        <li>
                            <Link to="/single">Contacts</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto social-list">
                        <li><Link to="https://twitter.com/realJmPaunlagui"><i className="fa fa-twitter"></i></Link></li>
                        <li><Link to="https://www.linkedin.com/in/john-moises-paunlagui-2b6b31186/"><i className="fa fa-linkedin"></i></Link></li>
                        <li><Link to="https://www.facebook.com/jm.paunlagui"><i className="fa fa-facebook"></i></Link></li>
                        <li><Link to="https://www.instagram.com/jmpaunlagui"><i className="fa fa-instagram"></i></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;