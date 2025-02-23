import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FilliateInfoBanner from '../components/organisms/FilliateInfoBanner/FilliateInfoBanner';

const DobreMiastoPage = () => {
    const { datoCmsDobreMiasto: data } = useStaticQuery(graphql`
        query DobreMiastoDataQuery {
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
    // @ts-ignore
    return <FilliateInfoBanner data={data} />;
};

export default DobreMiastoPage;
