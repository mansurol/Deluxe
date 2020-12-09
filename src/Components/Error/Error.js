import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className="container text-center errorsetup">
            <h1>Page not found</h1>
            <p>We're sorry, but the page you requested cannot be found.</p>
            <Link className="gohome" to='/home'>Go Home</Link>
        </div>
    );
};

export default Error;