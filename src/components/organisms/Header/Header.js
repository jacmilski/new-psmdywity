import React, { useState } from 'react';
import { StyledHeader } from './Header.styles';
import Logo from '../../atoms/Logo/Logo';
import Nav from '../Nav/Nav';
import HamburgerButton from '../../atoms/HamburgerButton/HamburgerButton';

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
