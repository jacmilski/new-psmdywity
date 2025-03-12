import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ContentLayout from '../../../../../templates/ContentLayout/ContentLayout';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import Gallery from '../../../../../organisms/Gallery/Gallery';

const Administration = () => {
    const { datoCmsAdministrationGallery } = useStaticQuery(graphql`
        query AdministrationQuery {
            datoCmsAdministrationGallery {
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

    const { photos } = datoCmsAdministrationGallery;

    return (
        <ContentLayout>
            <Gallery
                data={photos}
                title={datoCmsAdministrationGallery.title}
                subtitle={datoCmsAdministrationGallery.subtitle}
                teachers={false}
            />
        </ContentLayout>
    );
};

export default Administration;
