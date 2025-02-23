import React from 'react';
import GlobalStyles from '../../../styles/GlobalStyles';
import { StyledContentLayout } from './ContentLayout.styles';

const ContentLayout = ({ children }) => (
    <>
        <StyledContentLayout>
            <GlobalStyles />
            {children}
        </StyledContentLayout>
    </>
);

export default ContentLayout;
