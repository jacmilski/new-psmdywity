import React from 'react';
// @ts-ignore
import FClefIcon from '../../../images/icons/f-clef-32.png';
// @ts-ignore
import GClefIcon from '../../../images/icons/g-clef-32.png';
import {
    StyledButton,
    StyledButtonWrapper,
    StyledIcon,
    StyledLink,
} from './Button.styles';

const Button = ({ text, onClick, type, href }) =>
    href ? (
        <StyledButtonWrapper>
            <StyledIcon src={FClefIcon} alt={'klucz basowy'} />
            <StyledLink to={href}>{text}</StyledLink>
        </StyledButtonWrapper>
    ) : (
        <StyledButtonWrapper>
            <StyledIcon
                src={GClefIcon}
                alt={'klucz wiolinowy'} // @ts-ignore
                $variant="violin-clef"
            />
            <StyledButton type={type} onClick={onClick}>
                {text}
            </StyledButton>
        </StyledButtonWrapper>
    );

export default Button;
