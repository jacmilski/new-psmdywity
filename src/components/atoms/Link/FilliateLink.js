import React from 'react';
import { StyledLink, StyledLinkWrapper } from './FilliateLink.styles';

// @ts-ignore
const FilliateLink = ({ url, children, ariaLabel, className }) => (
    <StyledLinkWrapper>
        <StyledLink to={url}>{children}</StyledLink>
    </StyledLinkWrapper>
);

export default FilliateLink;
