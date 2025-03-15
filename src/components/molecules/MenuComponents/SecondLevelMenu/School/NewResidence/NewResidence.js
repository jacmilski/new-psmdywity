import React from 'react';
import { StyledNewResidence } from './NewResidence.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';

const NewResidence = () => {
    return (
        <StyledNewResidence>
            <TitleBanner title={`Nowa siedziba - projekt`} />
            <div className="info">Nowa siedziba - projekt</div>
        </StyledNewResidence>
    );
};

export default NewResidence;
