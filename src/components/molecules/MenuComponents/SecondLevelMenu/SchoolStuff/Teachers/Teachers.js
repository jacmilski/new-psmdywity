import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ContentLayout from '../../../../../templates/ContentLayout/ContentLayout';
import Gallery from '../../../../../organisms/Gallery/Gallery';
import Heading from '../../../../../atoms/Headings/Heading';
import {
    StyledHeadingsWrapper,
    StyledTeachersWrapper,
} from './Teachers.styles';
import Aside from '../../../../../organisms/Aside/Aside';
import TitleBanner from '../../../../TitleBanner/TitleBanner';

const Teachers = () => {
    const { datoCmsTeachersGallery } = useStaticQuery(graphql`
        query TeachersQuery {
            datoCmsTeachersGallery {
                title
                subtitle
                description
                teachersSection {
                    title
                    subtitle
                    originalId
                    photos {
                        alt
                        title
                        originalId
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    return (
        <ContentLayout>
            <TitleBanner title={`Pedagodzy`} />
            <Aside gallery={true} filliate={undefined} />
            <StyledTeachersWrapper>
                <StyledHeadingsWrapper>
                    <Heading
                        type="h1"
                        title={datoCmsTeachersGallery.title}
                        teachers={undefined}
                    />
                    <Heading
                        type="h3"
                        title={datoCmsTeachersGallery.subtitle}
                        teachers={undefined}
                    />
                    <p>{datoCmsTeachersGallery.description}</p>
                </StyledHeadingsWrapper>
                {datoCmsTeachersGallery.teachersSection.map(
                    (section, index) => (
                        <Gallery
                            data={section.photos}
                            title={section.title}
                            subtitle={section.subtitle}
                            key={
                                section.originalId +
                                String(
                                    (new Date().getMilliseconds() + index) /
                                        new Date().getMilliseconds()
                                )
                            }
                            // @ts-ignore
                            teachers={true}
                        />
                    )
                )}
            </StyledTeachersWrapper>
        </ContentLayout>
    );
};

export default Teachers;
