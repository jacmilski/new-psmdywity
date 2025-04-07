import React, { useState } from 'react';
import IsOpenContext from '../../../utilities/context/isOpenContext';
import GlobalStyles from '../../../styles/GlobalStyles';
import HeaderMobile from '../../organisms/Header/HeaderMobile';
import Header from '../../organisms/Header/Header';
import HamburgerButtonCopy from '../../atoms/HamburgerButton/HamburgerButton_copy';
import useIsSSR from '../../../hooks/useIsSSR';
import useWindowWidth from '../../../hooks/useWindowWidth';
import FooterInfo from '../../atoms/FooterInfo/FooterInfo';

const GlobalLayout = ({ children }) => {
    const isSSR = useIsSSR();
    const windowWidth = useWindowWidth(isSSR);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <IsOpenContext.Provider
            value={{
                isOpen,
                setIsOpen: () => setIsOpen(!isOpen),
            }}
        >
            <div>
                {' '}
                {/* style={{ position: 'relative' }} */}
                <GlobalStyles />
                <HamburgerButtonCopy
                    openMenu={() => setIsOpen(!isOpen)}
                    // @ts-ignore
                    isOpen={isOpen}
                />
                {!isOpen ? (
                    <Header isOpen={isOpen} />
                ) : isOpen && windowWidth <= 768 ? (
                    <HeaderMobile
                        isOpen={isOpen}
                        openMenu={() => setIsOpen(!isOpen)}
                    />
                ) : (
                    <Header isOpen={isOpen} />
                )}
                {children}
                <FooterInfo />
            </div>
        </IsOpenContext.Provider>
    );
};

export default GlobalLayout;
