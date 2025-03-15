import React, { memo } from 'react';
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
                isOpen={undefined}
                widthOfWindow={undefined}
            />
        </StyledAside>
    );
};

export default memo(Aside);
