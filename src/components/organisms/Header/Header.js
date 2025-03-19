import React from 'react';
import { StyledHeader } from './Header.styles';
import Logo from '../../atoms/Logo/Logo';
import Nav from '../Nav/Nav';

const Header = ({ isOpen }) => {
    return (
        <StyledHeader
            // @ts-ignore
            $isOpen={isOpen}
        >
            <Logo isOpen={isOpen} />
            <Nav
                // @ts-ignore
                isOpen={isOpen}
            />
        </StyledHeader>
    );
};

export default Header;
