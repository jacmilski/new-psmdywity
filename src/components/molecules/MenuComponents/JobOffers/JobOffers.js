import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StyledJobOffers } from './JobOffers.styles';

const JobOffers = () => {
    const {
        allDatoCmsJobOffer: { nodes },
    } = useStaticQuery(graphql`
        query jobOffersQuery {
            allDatoCmsJobOffer {
                nodes {
                    validDate
                    date(formatString: "DD-MM-YYYY", locale: "PL-pl")
                    jobOfferList {
                        jobTitle
                        jobOfferDescription
                        offerDate(formatString: "DD-MM-YYYY", locale: "PL-pl")
                        originalId
                        contact
                    }
                }
            }
        }
    `);

    const { jobOfferList } = nodes[0];
    return (
        <StyledJobOffers>
            <div>
                <span>{nodes[0].validDate}</span> <span>{nodes[0].date}</span>
                {' | '}
                <Link to="/">Start</Link>
            </div>
            {jobOfferList.map(
                ({
                    jobTitle,
                    jobOfferDescription,
                    offerDate,
                    originalId,
                    contact,
                }) => (
                    <div key={originalId}>
                        <h3>{jobTitle}</h3>
                        <p>{offerDate}</p>
                        <p>{jobOfferDescription}</p>
                        <p>Kontakt: {contact}</p>
                    </div>
                )
            )}
        </StyledJobOffers>
    );
};

export default JobOffers;
