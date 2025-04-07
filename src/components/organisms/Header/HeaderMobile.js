import React, { useState } from 'react';
import Logo from '../../atoms/Logo/Logo';
import AsideMenuMobile from '../AsideMenu/AsideMenuMobile';
import FilliateLink from '../../atoms/Link/FilliateLink';
import { NavLabels } from '../Nav/Nav.data';
import { StyledHeaderWrapper } from './HeaderMobile.styles';
import useIsSSR from '../../../hooks/useIsSSR';
import useWindowWidth from '../../../hooks/useWindowWidth';

const HeaderMobile = ({ isOpen, openMenu }) => {
    const isSSR = useIsSSR();
    const windowWidth = useWindowWidth(isSSR);

    const [showAsideMenu, setShowAsideMenu] = useState(false);

    return (
        <StyledHeaderWrapper
            // @ts-ignore
            $isOpen={isOpen}
            $windowWidth={windowWidth}
            $showAsideMenu={showAsideMenu}
        >
            <div className="logo">
                <Logo isOpen={isOpen} />
            </div>
            <div className="nav-and-asidemenu">
                <div
                    className="nav"
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
                            // @ts-ignore
                            openMenu={() => openMenu()}
                        />
                        <FilliateLink
                            url={`/dywity`}
                            children={NavLabels.DYWITY}
                            ariaLabel={`Przełącz na stronę Dywit`}
                            className={undefined}
                            openMenu={() => openMenu()}
                        />
                        <FilliateLink
                            url={`/barczewo`}
                            children={NavLabels.BARCZEWO}
                            ariaLabel={`Przełącz na stronę Barczewa`}
                            className={undefined}
                            openMenu={() => openMenu()}
                        />
                        <FilliateLink
                            url={`/biskupiec`}
                            children={NavLabels.BISKUPIEC}
                            ariaLabel={`Przełącz na stronę Biskupca`}
                            className={undefined}
                            openMenu={() => openMenu()}
                        />
                        <FilliateLink
                            url={`/olsztynek`}
                            children={NavLabels.OLSZTYNEK}
                            ariaLabel={`Przełącz na stronę Olsztynka`}
                            className={undefined}
                            openMenu={() => openMenu()}
                        />
                        <FilliateLink
                            url={`/dobre-miasto`}
                            children={NavLabels.DOBRE_MIASTO}
                            ariaLabel={`Przełącz na stronę Dobrego Miasta`}
                            className={undefined}
                            openMenu={() => openMenu()}
                        />
                    </div>
                </div>
                <AsideMenuMobile
                    isOpen={isOpen}
                    // @ts-ignore
                    showMenu={() => setShowAsideMenu(!showAsideMenu)}
                    openMenu={openMenu}
                    isShownMenu={showAsideMenu}
                />
            </div>
        </StyledHeaderWrapper>
    );
};

export default HeaderMobile;
