import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
    StyledContentWrapper,
    StyledNewResidence,
} from './NewResidence.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import Aside from '../../../../../organisms/Aside/Aside';
import Gallery from '../../../../../organisms/Gallery/Gallery';

const NewResidence = () => {
    const {
        datoCmsNewResidenceGallery: { title, photos },
    } = useStaticQuery(graphql`
        query NewResidenceQuery {
            datoCmsNewResidenceGallery {
                title
                photos {
                    alt
                    gatsbyImageData
                }
            }
        }
    `);

    return (
        <StyledNewResidence>
            <TitleBanner title={`Nowa siedziba - projekt`} />
            <StyledContentWrapper>
                <Aside gallery={true} filliate={undefined} />
                <Gallery
                    data={photos}
                    title={title}
                    subtitle={undefined}
                    teachers={false}
                    achievements={undefined}
                />
            </StyledContentWrapper>
        </StyledNewResidence>
    );
};

export default NewResidence;
