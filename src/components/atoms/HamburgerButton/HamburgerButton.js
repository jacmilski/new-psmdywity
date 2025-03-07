import React from 'react';
import { StyledHamburgerButton, StyledIcon } from './HamburgerButton.styles';
// @ts-ignore
import TransparentHamburgerIcon from '../../../images/icons/hamburger_btn_transparent_50.png';
// @ts-ignore
import TransparentCloseButton from '../../../images/icons/close_transparent_50.png';

const HamburgerButton = ({ isOpen, openMenu }) => {
    return (
        <StyledHamburgerButton
            aria-label="otwórz menu"
            // @ts-ignore
            $isOpen={isOpen}
            onClick={openMenu}
            type="button"
        >
            {isOpen ? (
                <StyledIcon src={TransparentCloseButton} alt="zamknij menu" />
            ) : (
                <StyledIcon src={TransparentHamburgerIcon} alt="otwórz menu" />
            )}
        </StyledHamburgerButton>
    );
};

export default HamburgerButton;
