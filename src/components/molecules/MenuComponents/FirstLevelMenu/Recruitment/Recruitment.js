import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledRecruitment } from './Recruitment.styles';
import Heading from '../../../../atoms/Headings/Heading';
import InfoBadge from '../../../../atoms/InfoBadge/InfoBadge';
import TitleBanner from '../../../TitleBanner/TitleBanner';

const Recruitment = () => {
    const {
        datoCmsRecruitment: { recruitmentDocs, validDate, date, document },
    } = useStaticQuery(graphql`
        query RecruitmentQuery {
            datoCmsRecruitment {
                recruitmentDocs
                validDate
                date(formatString: "DD-MM-YYYY", locale: "PL-pl")
                document {
                    alt
                    title
                    url
                    originalId
                }
            }
        }
    `);

    return (
        <StyledRecruitment>
            <TitleBanner title={`Rekrutacja`} />
            <div className="info">
                <Heading
                    type="h2"
                    title={recruitmentDocs}
                    teachers={undefined}
                />
                <InfoBadge text={validDate} date={date} url="/" label="Start" />
                <ul>
                    {document.map((doc) => (
                        <li key={doc.originalId}>
                            <a href={doc.url} target="_blank" rel="noreferrer">
                                {doc.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </StyledRecruitment>
    );
};

export default Recruitment;
