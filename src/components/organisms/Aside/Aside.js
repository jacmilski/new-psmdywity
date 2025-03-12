import React from 'react';
import { StyledAside } from './Aside.styles';
import AsideMenu from '../AsideMenu/AsideMenu';

const Aside = ({ gallery, filliate }) => {
    return (
        <StyledAside
            // @ts-ignore
            $filliate={filliate}
        >
            <AsideMenu
                // @ts-ignore
                gallery={gallery}
                // @ts-ignore
                filliate={filliate}
            />
        </StyledAside>
    );
};

export default Aside;
