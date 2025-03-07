import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FilliateInfoBanner from '../components/organisms/FilliateInfoBanner/FilliateInfoBanner';
import ContentLayout from '../components/templates/ContentLayout/ContentLayout';
import Aside from '../components/organisms/Aside/Aside';
import { NewsContainer, HorizontalDivider } from '../styles/pagesSharedStyles';
import NewsfeedHeadline from '../components/atoms/NewsfeedHeadline/NewsfeedHeadline';
import Newsfeed from '../components/organisms/Newsfeed/Newsfeed';
import labels from './labels';

const DywityPage = () => {
    const { datoCmsDywity: data } = useStaticQuery(graphql`
        query DywityDataQuery {
            datoCmsDywity {
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
                    messageDate(formatString: "DD MMMM YYYY", locale: "pl-PL")
                    tag
                    originalId
                    message
                    imageForMessage {
                        gatsbyImageData
                        alt
                    }
                    imageDescription
                    videoForMessage {
                        url
                    }
                    videoDescription
                    filliates {
                        ... on DatoCmsBarczewo {
                            originalId
                            cityName
                        }
                        ... on DatoCmsBiskupiec {
                            originalId
                            cityName
                        }
                        ... on DatoCmsOlsztynek {
                            originalId
                            cityName
                        }
                        ... on DatoCmsDobreMiasto {
                            originalId
                            cityName
                        }
                    }
                }
            }
        }
    `);

    return (
        <>
            <FilliateInfoBanner data={data} />
            <ContentLayout>
                <Aside />
                <NewsContainer>
                    <NewsfeedHeadline
                        title={labels.ACTUALITY}
                        filliateName={labels.FILLIATE_DYWITY}
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

export default DywityPage;
