import React from 'react';
import {
    StyledArticlesWrapper,
    StyledGalleryItem,
    StyledGalleryWrapper,
} from './Articles.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import { StyledContentWrapper } from '../Diplomas/Diplomas.styles';
import Aside from '../../../../../organisms/Aside/Aside';
import Gallery from '../../../../../organisms/Gallery/Gallery';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Heading from '../../../../../atoms/Headings/Heading';
import DateBadge from '../../../../../atoms/DateBadge/DateBadge';

const Articles = () => {
    const {
        datoCmsArticle: { title, articlesElement },
    } = useStaticQuery(graphql`
        query ArticlesQuery {
            datoCmsArticle {
                title
                articlesElement {
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
        <StyledArticlesWrapper>
            <TitleBanner title={title} />
            <StyledContentWrapper>
                <Aside gallery={true} filliate={undefined} />
                <StyledGalleryWrapper>
                    <Heading type={`h2`} title={title} teachers={undefined} />

                    {articlesElement.map((article) => {
                        const data = article.media;
                        return (
                            <StyledGalleryItem key={article.originalId}>
                                <div className="date-and-links">
                                    <span>Aktualizacja: </span>
                                    <DateBadge date={article.date} />
                                    <Link to={`/dyplomy`}>Afisze |</Link>
                                    <Link to={`/afisze`}>Artykuły</Link>
                                </div>
                                {data.length !== 0 ? (
                                    <Gallery
                                        data={article.media}
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
                                        Brak materiałów
                                    </p>
                                )}
                            </StyledGalleryItem>
                        );
                    })}
                </StyledGalleryWrapper>
            </StyledContentWrapper>
        </StyledArticlesWrapper>
    );
};

export default Articles;
