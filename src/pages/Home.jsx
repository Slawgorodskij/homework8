import React from 'react';
import Performance from "../components/Performance";

const title = 'Главная';
const Home = () => {
    return (
        <div>
            <Performance title={title}/>
            <div className="main container">
                <p>тяжело в учении легко в бою</p>
            </div>
        </div>
    );
};

export default Home;