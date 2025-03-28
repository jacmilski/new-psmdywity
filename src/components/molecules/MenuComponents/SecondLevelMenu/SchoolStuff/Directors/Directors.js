import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../../../../organisms/Gallery/Gallery';
import Aside from '../../../../../organisms/Aside/Aside';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import {
    StyledContentWrapper,
    StyledDirectorsWrapper,
} from './Directors.styles';

const Directors = () => {
    const { datoCmsDirectorsGallery } = useStaticQuery(graphql`
        query DirectorsQuery {
            datoCmsDirectorsGallery {
                title
                subtitle
                photos {
                    alt
                    title
                    originalId
                    gatsbyImageData
                }
            }
        }
    `);

    const { photos } = datoCmsDirectorsGallery;

    return (
        <StyledDirectorsWrapper>
            <TitleBanner
                title={`Dyrekcja`}
                // @ts-ignore
            />
            <StyledContentWrapper>
                <Aside gallery={true} filliate={undefined} />
                <Gallery
                    data={photos}
                    title={datoCmsDirectorsGallery.title}
                    subtitle={datoCmsDirectorsGallery.subtitle}
                    teachers={false}
                    achievements={undefined}
                />
            </StyledContentWrapper>
        </StyledDirectorsWrapper>
    );
};

export default Directors;
