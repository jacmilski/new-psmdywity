import React, { memo } from 'react';
import {
    StyledBgImage,
    StyledTitle,
    StyledTitleBanner,
} from './TitleBanner.styles';
// @ts-ignore
import BgImage from '../../../images/bg-1.jpg';
import useIsSSR from '../../../hooks/useIsSSR';
import useWindowWidth from '../../../hooks/useWindowWidth';

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
