import React from 'react';
import './main.css';

const Main = React.memo(() => (
    <main>
        <div className="main-container">
            <h1>Create a Load</h1>
            <p>A <strong>load</strong> is a shipment you wish to have delivered by carriers.</p>
        </div>
    </main>
))

export default Main;