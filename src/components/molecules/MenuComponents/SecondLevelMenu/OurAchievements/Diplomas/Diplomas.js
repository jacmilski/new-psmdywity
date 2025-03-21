import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import {
    StyledContentWrapper,
    StyledDiplomasWrapper,
    StyledGalleryItem,
    StyledGalleryWrapper,
} from './Diplomas.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import Aside from '../../../../../organisms/Aside/Aside';
import Gallery from '../../../../../organisms/Gallery/Gallery';
import DateBadge from '../../../../../atoms/DateBadge/DateBadge';
import Heading from '../../../../../atoms/Headings/Heading';

const Diplomas = () => {
    const {
        datoCmsDiploma: { title, diplomasList },
    } = useStaticQuery(graphql`
        query DiplomasQuery {
            datoCmsDiploma {
                title
                diplomasList {
                    originalId
                    date(formatString: "DD-MM-YYYY")
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
        <StyledDiplomasWrapper>
            <TitleBanner title={title} />
            <StyledContentWrapper>
                <Aside gallery={true} filliate={undefined} />
                <StyledGalleryWrapper>
                    <Heading type={`h2`} title={title} teachers={undefined} />

                    {diplomasList.map((diploma) => {
                        const data = diploma.media;
                        return (
                            <StyledGalleryItem key={diploma.originalId}>
                                <div className="date-and-links">
                                    <span>Aktualizacja: </span>
                                    <DateBadge date={diploma.date} />
                                    <Link to={`/afisze`}>Afisze |</Link>
                                    <Link to={`/artykuly`}>Artykuły</Link>
                                </div>
                                {data.length !== 0 ? (
                                    <Gallery
                                        data={diploma.media}
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
        </StyledDiplomasWrapper>
    );
};

export default Diplomas;

/* return (
                                    <Gallery
                                        data={media}
                                        title={title}
                                        subtitle={''}
                                        teachers={false}
                                    />
                                ); */
