import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import SpaceHero from '../ContentHeros/SpaceHero/SpaceHero';
import SpaceContent from '../Content/Space/SpaceContent';
import Space from '../Content/Space/Space';


const SpacePage = () => {
    return (
        <div>
            <Navbar page="spacePage"/>
            <SpaceHero />
            <SpaceContent />
            <Space />
            <Footer />

        </div>
    )
};

export default SpacePage;