import React, { useEffect, useState, memo } from 'react';
import FilliateLink from '../../atoms/Link/FilliateLink';
import { NavLabels } from './Nav.data';
import { StyledNav } from './Nav.styles';
import AsideMenu from '../AsideMenu/AsideMenu';

const Nav = ({ isOpen, closeMenu }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth((prev) => window.innerWidth);
        });
    }, []);

    return (
        <StyledNav
            // @ts-ignore
            $isOpen={isOpen}
            onClick={closeMenu}
            $widthOfWindow={windowWidth}
        >
            <div className="links-wrapper">
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
            </div>
            {isOpen && windowWidth < 768 ? (
                <AsideMenu
                    gallery={undefined}
                    filliate={undefined}
                    isOpen={isOpen}
                    // @ts-ignore
                    widthOfWindow={windowWidth}
                />
            ) : null}
        </StyledNav>
    );
};

export default memo(Nav);
