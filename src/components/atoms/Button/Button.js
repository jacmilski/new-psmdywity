import React, { memo } from 'react';
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
import { labels } from './labels';

const Button = ({ text, onClick, type, href }) =>
    href ? (
        <StyledButtonWrapper>
            <StyledIcon src={FClefIcon} alt={labels.BASS_CLEF} />
            <StyledLink to={href}>{text}</StyledLink>
        </StyledButtonWrapper>
    ) : (
        <StyledButtonWrapper>
            <StyledIcon
                src={GClefIcon}
                alt="violin-clef" // @ts-ignore
                $variant={labels.VIOLIN_CLEF}
            />
            <StyledButton type={type} onClick={onClick}>
                {text}
            </StyledButton>
        </StyledButtonWrapper>
    );

export default memo(Button);
