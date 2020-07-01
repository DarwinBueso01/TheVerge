import React from 'react';
import Navbar from '../Navbar/Navbar';
import HomeHero from "../HomeHero/HomeHero";
import GameContent from '../Content/Gamers/GameContent';
import Footer from '../Footer/Footer';
import HomeTopInfo from "../HomeInfoComponent/HomeInfo";
import ScienceContent from '../Content/Science/ScienceContent';
import SpaceContent from '../Content/Space/SpaceContent';
import ArticleContent from '../Content/article';


const MainPage = () => {
    return (
        <div>
            <Navbar page="mainPage"/>
            <HomeHero page="mainPage" />
            <HomeTopInfo />
            <GameContent />
            <ArticleContent />
            <ScienceContent />
            <SpaceContent />
            <Footer />
        </div>
    )
};

export default MainPage;