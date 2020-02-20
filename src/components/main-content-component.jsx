import React from 'react';
import LeftContent from './left-content-component';
import RightContent from './right-content-component';
import './main-content-styles.scss';

const MainContent = () => (
    <section className="main-content">
        <section className="fifty-fifty">
            <LeftContent />
            <RightContent />
        </section>
    </section>
);

export default MainContent;