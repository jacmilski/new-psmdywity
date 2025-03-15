import React from 'react';
import { StyledFrequentQuestionsWrapper } from './FrequentQuestions.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';

const FrequentQuestions = () => {
    return (
        <StyledFrequentQuestionsWrapper>
            <TitleBanner title={`Najczęstsze pytania`} />
            <div className="info">Najczęstsze pytania</div>
        </StyledFrequentQuestionsWrapper>
    );
};

export default FrequentQuestions;
