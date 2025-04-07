import React, { memo } from 'react';
import { StyledLink, StyledLinkWrapper } from './FilliateLink.styles';

// @ts-ignore
const FilliateLink = ({ url, children, ariaLabel, className, openMenu }) => (
    <StyledLinkWrapper>
        <StyledLink to={url} onClick={() => openMenu(false)}>
            {children}
        </StyledLink>
    </StyledLinkWrapper>
);

export default memo(FilliateLink);
