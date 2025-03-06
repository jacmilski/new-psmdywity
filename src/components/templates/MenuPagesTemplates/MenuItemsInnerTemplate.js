import React from 'react';
import TitleBanner from '../../molecules/TitleBanner/TitleBanner';

const MenuItemsInnerTemplate = ({ children, title }) => {
    return (
        <>
            <TitleBanner title={title} />
            {children}
        </>
    );
};

export default MenuItemsInnerTemplate;
