import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <p>ДР8</p>
                <div>
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/posts'}>Статьи</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;