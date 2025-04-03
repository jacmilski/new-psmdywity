import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FilliateInfoBanner from '../components/organisms/FilliateInfoBanner/FilliateInfoBanner';
import ContentLayout from '../components/templates/ContentLayout/ContentLayout';
import Aside from '../components/organisms/Aside/Aside';
import { HorizontalDivider, NewsContainer } from '../styles/pagesSharedStyles';
import NewsfeedHeadline from '../components/atoms/NewsfeedHeadline/NewsfeedHeadline';
import Newsfeed from '../components/organisms/Newsfeed/Newsfeed';
import FilliatePageFooter from '../components/organisms/FilliatePageFooter/FilliatePageFooter';

const BiskupiecPage = () => {
    const { datoCmsBiskupiec: data, datoCmsBiskupiecFooter } =
        useStaticQuery(graphql`
            query BiskupiecDataQuery {
                datoCmsBiskupiecFooter {
                    officeWorkingHours
                    schoolGeolocation {
                        latitude
                        longitude
                    }
                    filliateFooterList {
                        title
                        content
                        originalId
                    }
                }
                datoCmsBiskupiec {
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
                            ... on DatoCmsDywity {
                                id
                                cityName
                            }
                            ... on DatoCmsBarczewo {
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

    const biskupiecData = {
        schoolName: data.schoolName,
        street: data.street,
        postcode: data.postcode,
        cityName: data.cityName,
        telephone: data.telephone,
        email: data.email,
    };

    return (
        <>
            <FilliateInfoBanner data={data} />
            <ContentLayout>
                <Aside gallery={undefined} filliate={true} />
                <NewsContainer>
                    <NewsfeedHeadline
                        title="Aktualności"
                        filliateName="filia Biskupiec"
                    />
                    {data.newsfeedList // @ts-ignore
                        .map((listData) => {
                            return (
                                <div key={listData.originalId}>
                                    <Newsfeed data={listData} />
                                    <HorizontalDivider />
                                </div>
                            );
                        })}
                </NewsContainer>
            </ContentLayout>
            <ContentLayout>
                <FilliatePageFooter
                    data={datoCmsBiskupiecFooter}
                    address={biskupiecData}
                />
            </ContentLayout>
        </>
    );
};

export default BiskupiecPage;
