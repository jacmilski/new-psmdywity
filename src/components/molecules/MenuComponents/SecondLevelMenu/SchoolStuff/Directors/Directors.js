import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ContentLayout from '../../../../../templates/ContentLayout/ContentLayout';
import Gallery from '../../../../../organisms/Gallery/Gallery';
import Aside from '../../../../../organisms/Aside/Aside';

const Directors = () => {
    const { datoCmsDirectorsGallery } = useStaticQuery(graphql`
        query DirectorsQuery {
            datoCmsDirectorsGallery {
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

    const { photos } = datoCmsDirectorsGallery;

    return (
        <ContentLayout>
            <Aside gallery={true} filliate={undefined} />
            <Gallery
                data={photos}
                title={datoCmsDirectorsGallery.title}
                subtitle={datoCmsDirectorsGallery.subtitle}
                teachers={false}
            />
        </ContentLayout>
    );
};

export default Directors;
