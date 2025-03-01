import React from 'react';
import { StyledImg, StyledLogo } from './Logo.styles';

const Logo = ({ isOpen }) => {
    return (
        <StyledLogo
            // @ts-ignore
            $isOpen={isOpen}
        >
            <StyledImg alt="Logo i Godło" />
        </StyledLogo>
    );
};

export default Logo;
