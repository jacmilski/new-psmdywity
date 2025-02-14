import React from 'react';
import { StyledHamburgerButton, StyledIcon } from './HamburgerButton.styles';
// @ts-ignore
import TransparentHamburgerIcon from '../../../images/icons/hamburger_btn_transparent_50.png';
// @ts-ignore
import TransparentCloseButton from '../../../images/icons/close_transparent_50.png';

const HamburgerButton = ({ isOpen = true, openMenu }) => {
    return (
        <StyledHamburgerButton
            aria-label="otwórz menu"
            onClick={openMenu}
            // @ts-ignore
            $isOpen={isOpen}
        >
            <StyledIcon
                src={isOpen ? TransparentCloseButton : TransparentHamburgerIcon}
                alt={isOpen ? 'zamknij menu' : 'otwórz menu'}
            />
        </StyledHamburgerButton>
    );
};

export default HamburgerButton;
