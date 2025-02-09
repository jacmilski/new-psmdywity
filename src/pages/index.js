import * as React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Seo from '../components/atoms/Seo/Seo';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';

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
            <Button
                text={`Zatwierdź`}
                onClick={undefined}
                type={`button`}
                href={undefined}
            />
        </main>
    );
};

export default IndexPage;

export const Head = () => <Seo pathname="/" />;
