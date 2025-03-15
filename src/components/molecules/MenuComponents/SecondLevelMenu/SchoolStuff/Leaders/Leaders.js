import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ContentLayout from '../../../../../templates/ContentLayout/ContentLayout';
import Gallery from '../../../../../organisms/Gallery/Gallery';
import Aside from '../../../../../organisms/Aside/Aside';
import TitleBanner from '../../../../TitleBanner/TitleBanner';

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
        <ContentLayout>
            <TitleBanner title={`Kierownicy sekcji`} />
            <Aside gallery={true} filliate={undefined} />
            <Gallery
                data={photos}
                title={datoCmsLeadersGallery.title}
                subtitle={datoCmsLeadersGallery.subtitle}
                teachers={false}
            />
        </ContentLayout>
    );
};

export default Leaders;
