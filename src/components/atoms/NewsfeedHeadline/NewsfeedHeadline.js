import React from 'react';
import {
    StyledDivider,
    StyledFilliateName,
    StyledNewsfeedHeadline,
    StyledTitle,
} from './NewsFeedHeadline.styles';

const NewsfeedHeadline = ({ title, filliateName }) => {
    return (
        <StyledNewsfeedHeadline>
            <StyledTitle>{title}</StyledTitle>
            <StyledDivider />
            <StyledFilliateName>{filliateName}</StyledFilliateName>
        </StyledNewsfeedHeadline>
    );
};

export default NewsfeedHeadline;
