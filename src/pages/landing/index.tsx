import React from 'react';

import logoImg from '../../assets/images/icons/logo.svg';
import landingImg from '../../assets/images/icons/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';


function Landing() {
   return (
   <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy" />
                <h2>Sua plataforma de estudos online. <3</h2>
            </div>

            <img
             src={landingImg}
             alt="Plataforma de estudos"
             className="hero-imag"
            />

            <div className="button-container">
                <a href="" className="study">
                    <img src={studyIcon} alt="Estudar"></img>
                    Estudar!
                </a>

                <a href="" className="give-classes">
                    <img src={giveClassesIcon} alt="Estudar"></img>
                    Estudar!
                </a>

                <span className="total-connections">
                    Total de 200 conexões já realizadas. <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div> 
       </div> 
     </div>
   )
}

export default Landing;