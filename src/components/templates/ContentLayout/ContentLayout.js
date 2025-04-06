import React from 'react';
import GlobalStyles from '../../../styles/GlobalStyles';
import { StyledContentLayout } from './ContentLayout.styles';

const ContentLayout = ({ children, footer }) => (
    <>
        <StyledContentLayout
            // @ts-ignore
            $footer={footer}
        >
            <GlobalStyles />
            {children}
        </StyledContentLayout>
    </>
);

export default ContentLayout;
