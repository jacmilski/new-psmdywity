import React from 'react';
import FilliateLink from '../../atoms/Link/FilliateLink';
import { NavLabels } from './Nav.data';
import { StyledNav } from './Nav.styles';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = ({ isOpen, closeMenu }) => {
    return (
        <StyledNav
            // @ts-ignore
            $isOpen={isOpen}
            onClick={closeMenu}
        >
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
        </StyledNav>
    );
};

export default Nav;
