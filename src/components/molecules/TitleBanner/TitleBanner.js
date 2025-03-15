import React, { memo, useEffect, useState } from 'react';
import {
    StyledBgImage,
    StyledTitle,
    StyledTitleBanner,
} from './TitleBanner.styles';
// @ts-ignore
import BgImage from '../../../images/bg-1.jpg';
import useIsSSR from '../../../hooks/useIsSSR';
import useWindowWidth from '../../../hooks/useWindowWidth';

/* Żeby wyłączyć ten banner przy isOpen=true trzeba zastosować context() */

const TitleBanner = ({ title }) => {
    const isSSR = useIsSSR();
    const windowWidth = useWindowWidth(isSSR);

    return (
        <StyledTitleBanner
            // @ts-ignore
            $widthOfWindow={windowWidth}
        >
            <StyledBgImage>
                <img src={BgImage} alt="Tło" />
            </StyledBgImage>
            <StyledTitle>{title}</StyledTitle>
        </StyledTitleBanner>
    );
};

export default memo(TitleBanner);
