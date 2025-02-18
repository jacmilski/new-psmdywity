import React from 'react';
import { StyledLinksWrapper, StyledNav } from './Nav.styles';
import FilliateLink from '../../atoms/Link/FilliateLink';
import Logo from '../../atoms/Logo/Logo';
import { NavLabels } from './Nav.data';

const Nav = ({ isOpen }) => {
    return (
        <StyledNav
            // @ts-ignore
            $isOpen={isOpen}
        >
            <Logo />
            <StyledLinksWrapper>
                <FilliateLink
                    url={`/`}
                    children={NavLabels.START}
                    ariaLabel={`Przełącz na stronę główną`}
                    className={undefined}
                />
                <FilliateLink
                    url={`/dywity`}
                    children={NavLabels.DYWITY}
                    ariaLabel={`Przełącz na stronę Dywit`}
                    className={undefined}
                />
                <FilliateLink
                    url={`/barczewo`}
                    children={NavLabels.BARCZEWO}
                    ariaLabel={`Przełącz na stronę Barczewa`}
                    className={undefined}
                />
                <FilliateLink
                    url={`/biskupiec`}
                    children={NavLabels.BISKUPIEC}
                    ariaLabel={`Przełącz na stronę Biskupca`}
                    className={undefined}
                />
                <FilliateLink
                    url={`/olsztynek`}
                    children={NavLabels.OLSZTYNEK}
                    ariaLabel={`Przełącz na stronę Olsztynka`}
                    className={undefined}
                />
                <FilliateLink
                    url={`/dobre-miasto`}
                    children={NavLabels.DOBRE_MIASTO}
                    ariaLabel={`Przełącz na stronę Dobrego Miasta`}
                    className={undefined}
                />
            </StyledLinksWrapper>
        </StyledNav>
    );
};

export default Nav;
