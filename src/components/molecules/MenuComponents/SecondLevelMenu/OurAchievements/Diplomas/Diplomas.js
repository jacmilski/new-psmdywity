import React from 'react';
import { StyledDiplomas } from './Diplomas.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';

const Diplomas = () => {
    return (
        <StyledDiplomas>
            <TitleBanner title={`Dyplomy`} />
            <div className="info">Dyplomy</div>
        </StyledDiplomas>
    );
};

export default Diplomas;
