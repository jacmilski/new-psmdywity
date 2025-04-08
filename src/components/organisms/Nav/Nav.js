import React, { memo } from 'react';
import FilliateLink from '../../atoms/Link/FilliateLink';
import { NavLabels } from './Nav.data';
import { StyledNav } from './Nav.styles';
import useIsSSR from '../../../hooks/useIsSSR';
import useWindowWidth from '../../../hooks/useWindowWidth';

const Nav = ({ isOpen }) => {
    const isSSR = useIsSSR();
    const windowWidth = useWindowWidth(isSSR);

    return (
        <StyledNav
            // @ts-ignore
            $isOpen={isOpen}
            $widthOfWindow={windowWidth}
        >
            <div className="links-wrapper">
                <FilliateLink
                    url={`/`}
                    children={NavLabels.START}
                    ariaLabel={`Przełącz na stronę główną`}
                    className={undefined}
                    openMenu={undefined}
                />
                <FilliateLink
                    url={`/dywity`}
                    children={NavLabels.DYWITY}
                    ariaLabel={`Przełącz na stronę Dywit`}
                    className={undefined}
                    openMenu={undefined}
                />
                <FilliateLink
                    url={`/barczewo`}
                    children={NavLabels.BARCZEWO}
                    ariaLabel={`Przełącz na stronę Barczewa`}
                    className={undefined}
                    openMenu={undefined}
                />
                <FilliateLink
                    url={`/biskupiec`}
                    children={NavLabels.BISKUPIEC}
                    ariaLabel={`Przełącz na stronę Biskupca`}
                    className={undefined}
                    openMenu={undefined}
                />
                <FilliateLink
                    url={`/olsztynek`}
                    children={NavLabels.OLSZTYNEK}
                    ariaLabel={`Przełącz na stronę Olsztynka`}
                    className={undefined}
                    openMenu={undefined}
                />
                <FilliateLink
                    url={`/dobre-miasto`}
                    children={NavLabels.DOBRE_MIASTO}
                    ariaLabel={`Przełącz na stronę Dobrego Miasta`}
                    className={undefined}
                    openMenu={undefined}
                />
            </div>
        </StyledNav>
    );
};

export default memo(Nav);
