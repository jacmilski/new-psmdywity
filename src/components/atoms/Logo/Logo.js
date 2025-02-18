import React from 'react';
import { StyledLogo } from './Logo.styles';
// @ts-ignore
import EmblemWithLogo from '../../../images/logo/Logo.png';

const Logo = () => {
    return (
        <StyledLogo>
            <img src={EmblemWithLogo} alt={`Logo i godło`} />
        </StyledLogo>
    );
};

export default Logo;
