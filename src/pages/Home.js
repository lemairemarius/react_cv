import React from 'react';
import Navigation from "../components/Navigation";

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>LEMAIRE Marius</h1>
                    <h2>Concepteur Developpeur d'Applications</h2>
                    <div className="pdf">
                        <a href="./media/cvM.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;