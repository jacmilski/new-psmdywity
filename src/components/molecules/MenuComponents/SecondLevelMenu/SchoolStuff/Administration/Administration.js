import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import Gallery from '../../../../../organisms/Gallery/Gallery';
import Aside from '../../../../../organisms/Aside/Aside';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import {
    StyledAdministrationWrapper,
    StyledContentWrapper,
} from './Administartion.styles';

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
        <StyledAdministrationWrapper>
            <TitleBanner title={`Pracownicy administracji`} />
            <StyledContentWrapper>
                <Aside gallery={true} filliate={undefined} />
                <Gallery
                    data={photos}
                    title={datoCmsAdministrationGallery.title}
                    subtitle={datoCmsAdministrationGallery.subtitle}
                    teachers={false}
                />
            </StyledContentWrapper>
        </StyledAdministrationWrapper>
    );
};

export default Administration;
