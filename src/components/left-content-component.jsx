import React from 'react';
import './left-content-styles.scss';

const LeftContent = () => (
    <section className="left-content">
        <div className="content">
            <h1>Airpods Pro</h1>
            <ul>
                <li><a href="#">Learn More ></a></li>
                <li><a href="#">Buy ></a></li>
            </ul>
        </div>
        <div className="image-wrapper">
            <img src="https://www.apple.com/v/airpods/i/images/overview/airpods_pro__qwgxmyvspfey_large.jpg" alt="" />
        </div>
    </section>
)

export default LeftContent
