import React from 'react';
import GlobalLayout from './src/components/templates/GlobalLayout/GlobalLayout';

export const wrapPageElement = ({ element, props }) => {
    return <GlobalLayout {...props}>{element}</GlobalLayout>;
};
