import React, { memo } from 'react';
import { StyledHamburgerButton, StyledIcon } from './HamburgerButton.styles';
// @ts-ignore
import OpenIcon from '../../../images/icons/icons8-menu-squared-48.png';
// @ts-ignore
import CloseIcon from '../../../images/icons/icons8-close-window-48.png';

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
                <StyledIcon src={CloseIcon} alt="zamknij menu" />
            ) : (
                <StyledIcon src={OpenIcon} alt="otwórz menu" />
            )}
        </StyledHamburgerButton>
    );
};

export default memo(HamburgerButton);
