import React from 'react';
import { StyledInstrumentsWrapper } from './Instruments.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';

const Instruments = () => {
    return (
        <StyledInstrumentsWrapper>
            <TitleBanner title={`Instrumenty`} />
            <div className="info">Instrumenty</div>
        </StyledInstrumentsWrapper>
    );
};

export default Instruments;
