import React from 'react';
import { StyledMusicianFirstClassGallery } from './MusicianFirstClassGallery.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';

const MusicianFirstClassGallery = () => {
    return (
        <StyledMusicianFirstClassGallery>
            <TitleBanner title={`Muzyk I Klasa - Galeria`} />
            <div className="info">MusicianFirsClassGallery</div>
        </StyledMusicianFirstClassGallery>
    );
};

export default MusicianFirstClassGallery;
