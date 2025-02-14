import * as React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Seo from '../components/atoms/Seo/Seo';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';
import FilliateLink from '../components/atoms/Link/FilliateLink';
import HamburgerButton from '../components/atoms/HamburgerButton/HamburgerButton';

const IndexPage = () => {
    return (
        <main>
            <GlobalStyles />
            <h1>Welcome to my Gatsby site!</h1>
            <Input name="name" type="text" label="Imię" error="Jakiś error" />
            <Input
                name="name"
                type="email"
                label="E-mail"
                error="Jakiś error"
            />
            <Input
                name="name"
                type="textarea"
                label="Wiadomość"
                error="Jakiś error"
            />
            <Button
                text={`Gatsby`}
                onClick={undefined}
                type={`button`}
                href={`/`}
            />
            <FilliateLink
                url={undefined}
                ariaLabel={undefined}
                className={undefined}
            >
                Barczewo
            </FilliateLink>
            <HamburgerButton isOpen={undefined} openMenu={undefined} />
        </main>
    );
};

export default IndexPage;

export const Head = () => <Seo pathname="/" />;
