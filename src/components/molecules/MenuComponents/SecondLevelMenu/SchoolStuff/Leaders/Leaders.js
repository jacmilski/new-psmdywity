import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from '../../../../../organisms/Gallery/Gallery';
import Aside from '../../../../../organisms/Aside/Aside';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import { StyledContentWrapper, StyledLeadersWrapper } from './Leaders.styles';

const Leaders = () => {
    const { datoCmsLeadersGallery } = useStaticQuery(graphql`
        query LeadersQuery {
            datoCmsLeadersGallery {
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

    const { photos } = datoCmsLeadersGallery;

    return (
        <StyledLeadersWrapper>
            <TitleBanner title={`Kierownicy sekcji`} />
            <StyledContentWrapper>
                <Aside gallery={true} filliate={undefined} />
                <Gallery
                    data={photos}
                    title={datoCmsLeadersGallery.title}
                    subtitle={datoCmsLeadersGallery.subtitle}
                    teachers={false}
                />
            </StyledContentWrapper>
        </StyledLeadersWrapper>
    );
};

export default Leaders;
