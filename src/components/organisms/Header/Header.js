import React, { useState } from 'react';
import { StyledHeader } from './Header.styles';
import HamburgerButton from '../../atoms/HamburgerButton/HamburgerButton';
import Logo from '../../atoms/Logo/Logo';
import Nav from '../Nav/Nav';
import IsOpenContext from '../../../utilities/context/isOpenContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <IsOpenContext.Provider
            value={{
                isOpen,
                setIsOpen: () => setIsOpen(!isOpen),
            }}
        >
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
        </IsOpenContext.Provider>
    );
};

export default Header;
