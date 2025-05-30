import React, { memo } from 'react';
import {
    StyledDivider,
    StyledFilliateName,
    StyledNewsfeedHeadline,
    StyledTitle,
} from './NewsfeedHeadline.styles';

const NewsfeedHeadline = ({ title, filliateName }) => {
    return (
        <>
            <StyledNewsfeedHeadline>
                <StyledTitle>{title}</StyledTitle>
                <StyledDivider />
                <StyledFilliateName>{filliateName}</StyledFilliateName>
            </StyledNewsfeedHeadline>
        </>
    );
};

export default memo(NewsfeedHeadline);
