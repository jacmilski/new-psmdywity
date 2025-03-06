import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FilliateInfoBanner from '../components/organisms/FilliateInfoBanner/FilliateInfoBanner';
import ContentLayout from '../components/templates/ContentLayout/ContentLayout';
import Aside from '../components/organisms/Aside/Aside';
import { HorizontalDivider, NewsContainer } from '../styles/pagesSharedStyles';
import NewsfeedHeadline from '../components/atoms/NewsfeedHeadline/NewsfeedHeadline';
import Newsfeed from '../components/organisms/Newsfeed/Newsfeed';

const BarczewoPage = () => {
    const { datoCmsBarczewo: data } = useStaticQuery(graphql`
        query BarczewoDataQuery {
            datoCmsBarczewo {
                schoolName
                street
                postcode
                cityName
                telephone
                email
                banner {
                    gatsbyImageData
                    alt
                }
                logo {
                    gatsbyImageData
                    alt
                }
                newsfeedList {
                    title
                    messageDate
                    tag
                    id
                    filliates {
                        ... on DatoCmsOlsztynek {
                            id
                            cityName
                        }
                        ... on DatoCmsDobreMiasto {
                            id
                            cityName
                        }
                        ... on DatoCmsBiskupiec {
                            id
                            cityName
                        }
                        ... on DatoCmsDywity {
                            id
                            cityName
                        }
                    }
                    message
                    imageForMessage {
                        gatsbyImageData
                        alt
                    }
                    videoForMessage {
                        url
                    }
                }
            }
        }
    `);
    // @ts-ignore
    return (
        <>
            <FilliateInfoBanner data={data} />;
            <ContentLayout>
                <Aside />
                <NewsContainer>
                    <NewsfeedHeadline
                        title={`Aktualności`}
                        filliateName={`filia Barczewo`}
                    />
                    {data.newsfeedList.map((listData) => {
                        return (
                            <div key={listData.originalId}>
                                <Newsfeed data={listData} />
                                <HorizontalDivider />
                            </div>
                        );
                    })}
                </NewsContainer>
            </ContentLayout>
        </>
    );
};

export default BarczewoPage;
