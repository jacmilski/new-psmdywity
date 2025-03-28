import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { JobContent, StyledJobOffers } from './JobOffers.styles';
import Heading from '../../../../atoms/Headings/Heading';
import InfoBadge from '../../../../atoms/InfoBadge/InfoBadge';
import DateBadge from '../../../../atoms/DateBadge/DateBadge';
import ContactBadge from '../../../../atoms/ContactBadge/ContactBadge';
import TitleBanner from '../../../TitleBanner/TitleBanner';

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
        <>
            <StyledJobOffers>
                <TitleBanner title={`Oferty pracy`} />
                <div className="info">
                    <Heading
                        type="h1"
                        title="Aktualne oferty pracy"
                        teachers={undefined}
                    />
                    <InfoBadge
                        text={nodes[0].validDate}
                        date={nodes[0].date}
                        url="/"
                        label="Start"
                    />
                    {jobOfferList.map(
                        ({
                            jobTitle,
                            jobOfferDescription,
                            offerDate,
                            originalId,
                            contact,
                        }) => (
                            <JobContent key={originalId}>
                                <Heading
                                    type="h3"
                                    title={jobTitle}
                                    teachers={undefined}
                                />
                                <DateBadge date={offerDate} />
                                <p>{jobOfferDescription}</p>
                                <br />
                                <ContactBadge data={contact} />
                            </JobContent>
                        )
                    )}
                </div>
            </StyledJobOffers>
        </>
    );
};

export default JobOffers;
