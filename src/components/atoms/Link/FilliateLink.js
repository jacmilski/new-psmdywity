import React from 'react';
import {
    StyledLink,
    //StyledLinkIcon,
    StyledLinkWrapper,
} from './FilliateLink.styles';
// @ts-ignore
//import CodaSign from '../../../images/icons/coda_sign_40.png';

// @ts-ignore
const FilliateLink = ({ url, children, ariaLabel, className }) => (
    <StyledLinkWrapper>
        {/* <StyledLinkIcon src={CodaSign} alt="muzyczny znak kody" /> */}
        <StyledLink to={url}>{children}</StyledLink>
    </StyledLinkWrapper>
);

export default FilliateLink;
