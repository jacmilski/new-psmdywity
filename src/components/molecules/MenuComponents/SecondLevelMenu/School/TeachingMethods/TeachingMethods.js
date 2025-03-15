import React from 'react';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import { StyledTeachingMethodsWrapper } from './TeachingMethods.styles';

const TeachingMethods = () => {
    return (
        <StyledTeachingMethodsWrapper>
            <TitleBanner title={`Metody nauczania`} />
            <div className="info">Metody nauczania</div>
        </StyledTeachingMethodsWrapper>
    );
};

export default TeachingMethods;
