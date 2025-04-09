import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
    StyledContentWrapper,
    StyledMusicianFirstClassGallery,
} from './MusicianFirstClassGallery.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import Aside from '../../../../../organisms/Aside/Aside';
import Gallery from '../../../../../organisms/Gallery/Gallery';
import Heading from '../../../../../atoms/Headings/Heading';

const MusicianFirstClassGallery = () => {
    const {
        datoCmsMikGallery: { mikGalleryList },
    } = useStaticQuery(graphql`
        query MIKGalleryQuery {
            datoCmsMikGallery {
                mikGalleryList {
                    edditionTitle
                    originalId
                    photos {
                        alt
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    console.log(mikGalleryList);

    return (
        <StyledMusicianFirstClassGallery>
            <TitleBanner title={`Muzyk I Klasa - Galeria`} />
            <StyledContentWrapper>
                <Aside gallery={true} filliate={undefined} />
                <StyledContentWrapper
                    style={{ flexDirection: 'column', padding: '30px 20px' }}
                >
                    {mikGalleryList.map((eddition) => (
                        <div key={eddition.originalId}>
                            <Heading
                                type={'h3'}
                                title={eddition.edditionTitle}
                                teachers={undefined}
                            />
                            <Gallery
                                data={eddition.photos}
                                title={undefined}
                                subtitle={undefined}
                                teachers={false}
                                achievements={false}
                            />
                        </div>
                    ))}
                </StyledContentWrapper>
            </StyledContentWrapper>
        </StyledMusicianFirstClassGallery>
    );
};

export default MusicianFirstClassGallery;
