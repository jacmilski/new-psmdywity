import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FilliateInfoBanner from '../components/organisms/FilliateInfoBanner/FilliateInfoBanner';
import ContentLayout from '../components/templates/ContentLayout/ContentLayout';
import Aside from '../components/organisms/Aside/Aside';
import { HorizontalDivider, NewsContainer } from '../styles/pagesSharedStyles';
import NewsfeedHeadline from '../components/atoms/NewsfeedHeadline/NewsfeedHeadline';
import Newsfeed from '../components/organisms/Newsfeed/Newsfeed';
import FilliatePageFooter from '../components/organisms/FilliatePageFooter/FilliatePageFooter';

const DobreMiastoPage = () => {
    const { datoCmsDobreMiasto: data, datoCmsDobreMiastoFooter } =
        useStaticQuery(graphql`
            query DobreMiastoDataQuery {
                datoCmsDobreMiastoFooter {
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
                datoCmsDobreMiasto {
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
                            ... on DatoCmsDywity {
                                id
                                cityName
                            }
                            ... on DatoCmsBiskupiec {
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

    const dobreMiastoData = {
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
                        filliateName="filia Dobre Miasto"
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
                    data={datoCmsDobreMiastoFooter}
                    address={dobreMiastoData}
                />
            </ContentLayout>
        </>
    );
};

export default DobreMiastoPage;
