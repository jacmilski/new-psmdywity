import React from 'react';
import {
    StyledContentWrapper,
    StyledGalleryItem,
    StyledGalleryWrapper,
    StyledPostersWrapper,
} from './Posters.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import Aside from '../../../../../organisms/Aside/Aside';
import Gallery from '../../../../../organisms/Gallery/Gallery';
import Heading from '../../../../../atoms/Headings/Heading';
import DateBadge from '../../../../../atoms/DateBadge/DateBadge';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Posters = () => {
    const {
        datoCmsPoster: { title, postersElement },
    } = useStaticQuery(graphql`
        query PostersQuery {
            datoCmsPoster {
                title
                postersElement {
                    date(formatString: "DD-MM-YYYY")
                    originalId
                    media {
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
        <StyledPostersWrapper>
            <TitleBanner title={title} />
            <StyledContentWrapper>
                <Aside gallery={true} filliate={undefined} />
                <StyledGalleryWrapper>
                    <Heading type={`h2`} title={title} teachers={undefined} />

                    {postersElement.map((poster) => {
                        const data = poster.media;
                        return (
                            <StyledGalleryItem key={poster.originalId}>
                                <div className="date-and-links">
                                    <span>Aktualizacja: </span>
                                    <DateBadge date={poster.date} />
                                    <Link to={`/Dyplomy`}>Afisze |</Link>
                                    <Link to={`/artykuly`}>Artykuły</Link>
                                </div>
                                {data.length !== 0 ? (
                                    <Gallery
                                        data={poster.media}
                                        title={undefined}
                                        subtitle={undefined}
                                        teachers={undefined}
                                        achievements={true}
                                    />
                                ) : (
                                    <p
                                        style={{
                                            color: 'red',
                                            textAlign: 'center',
                                            width: '100%',
                                            display: 'block',
                                        }}
                                    >
                                        Brak materiałów do wyświetlenia...
                                    </p>
                                )}
                            </StyledGalleryItem>
                        );
                    })}
                </StyledGalleryWrapper>
            </StyledContentWrapper>
        </StyledPostersWrapper>
    );
};

export default Posters;
