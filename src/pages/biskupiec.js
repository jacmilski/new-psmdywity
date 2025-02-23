import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FilliateInfoBanner from '../components/organisms/FilliateInfoBanner/FilliateInfoBanner';

const BiskupiecPage = () => {
    const { datoCmsBiskupiec: data } = useStaticQuery(graphql`
        query BiskupiecDataQuery {
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
    // @ts-ignore
    return <FilliateInfoBanner data={data} />;
};

export default BiskupiecPage;
