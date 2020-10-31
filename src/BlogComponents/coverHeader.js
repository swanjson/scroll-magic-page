import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline } from 'react-gsap';
import '../css-files/coverHeader.css';
import coverLogo from '../assets/complexlogo.png';
import dbcoverline from '../assets/dbcoverline.png';


const CoverHeaderStyled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
`;


const CoverHeader = () => (
    <CoverHeaderStyled>
        <Controller>
            <Scene triggerHook="onLeave"
                    duration="10%"
                    indicators={true}
                    pin>
                <Timeline wrapper={<div id="pinContainer" />}>
                    <article id="cover" data-screen="">
                        <div id="title_line">
                            <img src={coverLogo} id="coverlogo" alt="coverlogo"></img>
                            <img src={dbcoverline} id="coverline" alt="coverline"></img>
                        </div>
                            <video autoPlay="" width="100%" height="100%" loop={true} controls="">
                                <source src="https://covercdn.complex.com/custom/danny_brown/vid/DannyBrown_Hi_Final.mp4" type="video/mp4"></source>
                                <source src="https://covercdn.complex.com/custom/danny_brown/vid/DannyBrown_Hi_Final.ogv" type="video/ogg"></source>
                                <source src="https://covercdn.complex.com/custom/danny_brown/vid/DannyBrown_Hi_Final.webm" type="video/webm"></source>
                            </video>
                        <div id="cursor"></div>
                    </article>
                </Timeline>
            </Scene>
        </Controller>
    </CoverHeaderStyled>
);

export default CoverHeader;