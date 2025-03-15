import React from 'react';
import { StyledWhyWorthWrapper } from './WhyWorth.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';

const WhyWorth = () => {
    return (
        <StyledWhyWorthWrapper>
            <TitleBanner title={`Dlaczego warto?`} />
            <div className="info">Dlaczego warto?</div>
        </StyledWhyWorthWrapper>
    );
};

export default WhyWorth;
