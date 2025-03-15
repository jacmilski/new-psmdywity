import React from 'react';
import ReactDOM from 'react-dom';
import GlobalLayout from './src/components/templates/GlobalLayout/GlobalLayout';
const loadableReady = require('@loadable/component').loadableReady;

export const wrapPageElement = ({ element, props }) => {
    return <GlobalLayout {...props}>{element}</GlobalLayout>;
};

export const replaceHydrateFunction = () => {
    return (element, container, callback) => {
        loadableReady(() => {
            ReactDOM.render(element, container, callback);
        });
    };
};
