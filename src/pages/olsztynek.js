import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FilliateInfoBanner from '../components/organisms/FilliateInfoBanner/FilliateInfoBanner';
import ContentLayout from '../components/templates/ContentLayout/ContentLayout';
import Aside from '../components/organisms/Aside/Aside';
import { HorizontalDivider, NewsContainer } from '../styles/pagesSharedStyles';
import NewsfeedHeadline from '../components/atoms/NewsfeedHeadline/NewsfeedHeadline';
import Newsfeed from '../components/organisms/Newsfeed/Newsfeed';
import FilliatePageFooter from '../components/organisms/FilliatePageFooter/FilliatePageFooter';

const OlsztynekPage = () => {
    const {
        datoCmsOlsztynek: data,
        datoCmsOlsztynekFooter,
        datoCmsOlsztynek: address,
    } = useStaticQuery(graphql`
        query OlsztynekDataQuery {
            datoCmsOlsztynekFooter {
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
            datoCmsOlsztynek {
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
                        ... on DatoCmsDywity {
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

    const olsztynekData = {
        schoolName: address.schoolName,
        street: address.street,
        postcode: address.postcode,
        cityName: address.cityName,
        telephone: address.telephone,
        email: address.email,
    };

    return (
        <>
            <FilliateInfoBanner data={data} />
            <ContentLayout>
                <Aside gallery={undefined} filliate={true} />
                <NewsContainer>
                    <NewsfeedHeadline
                        title="Aktualności"
                        filliateName="filia Olsztynek"
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
                    data={datoCmsOlsztynekFooter}
                    address={olsztynekData}
                />
            </ContentLayout>
        </>
    );
};

export default OlsztynekPage;
