const React = require('react');
const {
    default: GlobalLayout,
} = require('./src/components/templates/GlobalLayout/GlobalLayout');

exports.wrapPageElement = ({ element, props }) => {
    return <GlobalLayout {...props}>{element}</GlobalLayout>;
};

exports.onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/Lato-Light.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/Lato-Italic.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/Lato-LightItalic.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/Lato-Regular.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/Lato-Bold.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/Lora-Italic.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/Lora-Regular.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/Lora-Medium.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/Lora-Bold.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
            key="interFont"
        />,
        <link
            rel="preload"
            href="/fonts/DaysOne-Regular.woff2"
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
            key="interFont"
        />,
    ]);
};
