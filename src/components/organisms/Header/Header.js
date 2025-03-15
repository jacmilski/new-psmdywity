import React, { useState } from 'react';
import { StyledHeader } from './Header.styles';
import HamburgerButton from '../../atoms/HamburgerButton/HamburgerButton';
import Logo from '../../atoms/Logo/Logo';
import Nav from '../Nav/Nav';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledHeader
            // @ts-ignore
            $isOpen={isOpen}
        >
            <Logo isOpen={isOpen} />
            <Nav
                // @ts-ignore
                isOpen={isOpen}
                closeMenu={() => setIsOpen(false)}
            />
            <HamburgerButton
                openMenu={() => setIsOpen(!isOpen)}
                // @ts-ignore
                isOpen={isOpen}
            />
        </StyledHeader>
    );
};

export default Header;
