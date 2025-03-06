import React from 'react';
import {
    StyledBgImage,
    StyledTitle,
    StyledTitleBanner,
} from './TitleBanner.styles';
// @ts-ignore
import BgImage from '../../../images/bg-1.jpg';

const TitleBanner = ({ title }) => {
    return (
        <StyledTitleBanner>
            <StyledBgImage>
                <img src={BgImage} alt="Tło" />
            </StyledBgImage>
            <StyledTitle>{title}</StyledTitle>
        </StyledTitleBanner>
    );
};

export default TitleBanner;
