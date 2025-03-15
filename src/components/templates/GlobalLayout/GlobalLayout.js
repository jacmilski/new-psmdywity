import React, { useContext } from 'react';
import GlobalStyles from '../../../styles/GlobalStyles';
import Header from '../../organisms/Header/Header';

const GlobalLayout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Header />
            {children}
            Tu będzie Footer
        </>
    );
};

export default GlobalLayout;
