import React from 'react';
import {
    StyledFooterInfo,
    StyledInfoContent,
    StyledInfoWrapper,
} from './FooterInfo.styles';

const FooterInfo = () => {
    return (
        <StyledFooterInfo>
            <StyledInfoWrapper>
                <StyledInfoContent>
                    © 2025 Samorządowa Szkoła Muzyczna I stopnia w Dywitach w
                    Powiecie Olsztyńskim | Projekt i wykonanie:{' '}
                    <strong>Jacek Michalski</strong>
                </StyledInfoContent>
            </StyledInfoWrapper>
        </StyledFooterInfo>
    );
};

export default FooterInfo;
