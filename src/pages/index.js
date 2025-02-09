import * as React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Seo from '../components/atoms/Seo/Seo';
import Input from '../components/atoms/Input/Input';

const IndexPage = () => {
    return (
        <main>
            <GlobalStyles />
            <h1>Welcome to my Gatsby site!</h1>
            <Input name="name" type="text" label="Imię" error="Jakiś error" />
            <Input
                name="name"
                type="textarea"
                label="Wiadomość"
                error="Jakiś error"
            />
        </main>
    );
};

export default IndexPage;

export const Head = () => <Seo pathname="/" />;
