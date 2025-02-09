import * as React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Seo from '../components/Seo/Seo';

const IndexPage = () => {
    return (
        <main>
            <GlobalStyles />
            <h1>Welcome to my Gatsby site!</h1>
        </main>
    );
};

export default IndexPage;

export const Head = () => <Seo pathname="/" />;
