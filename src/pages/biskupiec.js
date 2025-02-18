import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import FilliateInfoBanner from '../components/organisms/FilliateInfoBanner/FilliateInfoBanner';

const BiskupiecPage = () => {
    const { datoCmsFiliaBiskupiec: data } = useStaticQuery(graphql`
        query BiskupiecDataQuery {
            datoCmsFiliaBiskupiec {
                nazwaSzkoly
                ulica
                kodPocztowy
                nazwaMiasta
                telefon
                eMail
                banner {
                    gatsbyImageData
                    alt
                }
                logo {
                    gatsbyImageData
                    alt
                }
            }
        }
    `);
    // @ts-ignore
    return <FilliateInfoBanner data={data} />;
};

export default BiskupiecPage;
