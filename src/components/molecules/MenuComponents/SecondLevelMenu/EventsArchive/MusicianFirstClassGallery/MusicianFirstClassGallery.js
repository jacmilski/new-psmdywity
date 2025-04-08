import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
    StyledContentWrapper,
    StyledMusicianFirstClassGallery,
} from './MusicianFirstClassGallery.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import Aside from '../../../../../organisms/Aside/Aside';
import Gallery from '../../../../../organisms/Gallery/Gallery';

const MusicianFirstClassGallery = () => {
    /*  const data = useStaticQuery(graphql``); */

    return (
        <StyledMusicianFirstClassGallery>
            <TitleBanner title={`Muzyk I Klasa - Galeria`} />
            <StyledContentWrapper>
                <Aside gallery={true} filliate={undefined} />
                <Gallery
                    data={[]}
                    title={undefined}
                    subtitle={undefined}
                    teachers={false}
                    achievements={undefined}
                />
            </StyledContentWrapper>
        </StyledMusicianFirstClassGallery>
    );
};

export default MusicianFirstClassGallery;
