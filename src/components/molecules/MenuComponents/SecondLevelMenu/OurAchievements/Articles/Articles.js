import React from 'react';
import { StyledArticles } from './Articles.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';

const Articles = () => {
    return (
        <StyledArticles>
            <TitleBanner title={`Artykuły`} />
            <div className="info">Artykuły</div>
        </StyledArticles>
    );
};

export default Articles;
