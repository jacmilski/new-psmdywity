import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FilliateInfoBanner from '../components/organisms/FilliateInfoBanner/FilliateInfoBanner';
import ContentLayout from '../components/templates/ContentLayout/ContentLayout';
import Aside from '../components/organisms/Aside/Aside';
import { HorizontalDivider, NewsContainer } from '../styles/pagesSharedStyles';
import NewsfeedHeadline from '../components/atoms/NewsfeedHeadline/NewsfeedHeadline';
import Newsfeed from '../components/organisms/Newsfeed/Newsfeed';
import FilliatePageFooter from '../components/organisms/FilliatePageFooter/FilliatePageFooter';

const BarczewoPage = () => {
    const {
        datoCmsBarczewo: data,
        datoCmsBarczewoFooter,
        datoCmsBarczewo: address,
    } = useStaticQuery(graphql`
        query BarczewoDataQuery {
            datoCmsBarczewoFooter {
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

    const barczewoData = {
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
                        filliateName="filia Barczewo"
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
                    data={datoCmsBarczewoFooter}
                    address={barczewoData}
                />
            </ContentLayout>
        </>
    );
};

export default BarczewoPage;
