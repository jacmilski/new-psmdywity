import React, { memo } from 'react';
import { StyledLink, StyledLinkWrapper } from './FilliateLink.styles';

// @ts-ignore
const FilliateLink = ({ url, children, ariaLabel, className, openMenu }) => {
    const handleOpenMenu = () => {
        if (typeof openMenu === 'function') {
            openMenu(false);
        }
    };

    return (
        <StyledLinkWrapper>
            <StyledLink to={url} onClick={handleOpenMenu}>
                {children}
            </StyledLink>
        </StyledLinkWrapper>
    );
};

export default memo(FilliateLink);
