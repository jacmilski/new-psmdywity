import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ContentLayout from '../../../../../templates/ContentLayout/ContentLayout';
import Gallery from '../../../../../organisms/Gallery/Gallery';

const Leaders = () => {
    const { datoCmsLeadersGallery } = useStaticQuery(graphql`
        query LeadersQuery {
            datoCmsLeadersGallery {
                title
                subtitle
                photos {
                    alt
                    title
                    gatsbyImageData
                }
            }
        }
    `);

    const { photos } = datoCmsLeadersGallery;

    return (
        <ContentLayout>
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
