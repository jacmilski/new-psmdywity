import React from 'react';
// @ts-ignore
import logoImage from '../../../images/logo/logo.png';
import { StyledLogo } from './LogoAndEmbed.styles';

const Logo = ({ isOpen }) => {
    return (
        <StyledLogo
            // @ts-ignore
            $isOpen={isOpen}
        >
            <img src={logoImage} alt="Logo i Godło" />
        </StyledLogo>
    );
};

export default Logo;
