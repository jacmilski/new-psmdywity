import React from 'react';
import { StyledPosters } from './Posters.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';

const Posters = () => {
    return (
        <StyledPosters>
            <TitleBanner title={`Afisze`} />
            <div className="info">Afisze</div>
        </StyledPosters>
    );
};

export default Posters;
