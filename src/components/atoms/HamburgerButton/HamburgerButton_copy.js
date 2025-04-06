import React, { memo } from 'react';
// @ts-ignore
import OpenIcon from '../../../images/icons/icons8-menu-squared-48.png';
// @ts-ignore
import CloseIcon from '../../../images/icons/icons8-close-window-48.png';
import {
    StyledHamburgerButton,
    StyledIcon,
} from './HamburgerButton.styles copy';

const HamburgerButtonCopy = ({ isOpen, openMenu }) => {
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

export default memo(HamburgerButtonCopy);
