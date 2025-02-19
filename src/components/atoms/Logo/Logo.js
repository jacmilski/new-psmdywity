import React from 'react';
import { StyledLogo } from './Logo.styles';
// @ts-ignore
import EmblemWithLogo from '../../../images/logo/Logo.png';

const Logo = ({ isOpen }) => {
    return (
        <StyledLogo
            // @ts-ignore
            $isOpen={isOpen}
        >
            <img src={EmblemWithLogo} alt={`Logo i godło`} />
        </StyledLogo>
    );
};

export default Logo;
