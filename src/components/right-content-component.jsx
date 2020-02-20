import React from 'react';
import './right-content-styles.scss';

const RightContent = () => (
    <section className="right-content">
        <div className="content">
            <h1>Airpods</h1>
            <ul>
                <li><a href="#">Learn More ></a></li>
                <li><a href="#">Buy ></a></li>

            </ul>
        </div>
        <div className="image-wrapper">
            <img src="https://www.apple.com/v/airpods/i/images/overview/airpods__dh7xkbort402_large.jpg" alt="" />
        </div>
    </section>
)

export default RightContent
