import React from 'react';
import { StyledHamburgerButton, StyledIcon } from './HamburgerButton.styles';
// @ts-ignore
import TransparentHamburgerIcon from '../../../images/icons/hamburger_btn_transparent_50.png';
// @ts-ignore
import TransparentCloseButton from '../../../images/icons/close_transparent_50.png';
import { labels } from './labels';

const HamburgerButton = ({ isOpen, openMenu }) => {
    return (
        <StyledHamburgerButton
            aria-label={labels.OPEN_MENU}
            // @ts-ignore
            $isOpen={isOpen}
            onClick={openMenu}
            type="button"
        >
            {isOpen ? (
                <StyledIcon
                    src={TransparentCloseButton}
                    alt={labels.CLOSE_MENU}
                />
            ) : (
                <StyledIcon
                    src={TransparentHamburgerIcon}
                    alt={labels.OPEN_MENU}
                />
            )}
        </StyledHamburgerButton>
    );
};

export default HamburgerButton;
