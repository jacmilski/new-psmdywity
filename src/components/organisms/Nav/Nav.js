import React, { useEffect, useState, memo } from 'react';
import FilliateLink from '../../atoms/Link/FilliateLink';
import { NavLabels } from './Nav.data';
import { StyledNav } from './Nav.styles';
import AsideMenu from '../AsideMenu/AsideMenu';
import useIsSSR from '../../../hooks/useIsSSR';

const Nav = ({ isOpen, closeMenu }) => {
    const isSSR = useIsSSR();

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (isSSR) return;
        window.addEventListener('resize', () => {
            setWindowWidth((prev) => window.innerWidth);
        });

        return () => {
            window.removeEventListener('resize', () => {
                setWindowWidth((prev) => window.innerWidth);
            });
        };
    }, [isSSR]);

    return (
        <StyledNav
            // @ts-ignore
            $isOpen={isOpen}
            onClick={closeMenu}
            $widthOfWindow={windowWidth} //windowWidth
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
            {isOpen && windowWidth < 768 ? ( //&& windowWidth < 768
                <AsideMenu
                    gallery={undefined}
                    filliate={undefined}
                    isOpen={isOpen}
                    // @ts-ignore
                    widthOfWindow={windowWidth} //windowWidth
                />
            ) : null}
        </StyledNav>
    );
};

export default memo(Nav);
