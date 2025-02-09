import React from 'react';
import { StyledButton, StyledLink } from './Button.styles';

const Button = ({ text, onClick, type, href }) =>
    href ? (
        // @ts-ignore
        <StyledLink to={href}>{text}</StyledLink>
    ) : (
        <StyledButton type={type} onClick={onClick}>
            {text}
        </StyledButton>
    );

export default Button;
