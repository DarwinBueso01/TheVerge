import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScienceHero from '../ContentHeros/ScienceHero/ScienceHero';
import ScienceContent from '../Content/Science/ScienceContent';
import Science from '../Content/Science/Science';

const SciencePage = () => {
    return (
        <div>
            <Navbar page="sciencePage"/>
            <ScienceHero/>
            <ScienceContent />
            <Science />
            <Footer />

        </div>
    )
};

export default SciencePage;