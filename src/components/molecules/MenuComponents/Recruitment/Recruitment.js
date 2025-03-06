import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StyledRecruitment } from './Recruitment.styles';

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
            <h2>{recruitmentDocs}</h2>
            <div>
                <span>{validDate}</span> <span>{date}</span>
                {' | '}
                <Link to="/">Start</Link>
            </div>
            <ul>
                {document.map((doc) => (
                    <li>
                        <a href={doc.url} target="_blank" rel="noreferrer">
                            {doc.title}
                        </a>
                    </li>
                ))}
            </ul>
        </StyledRecruitment>
    );
};

export default Recruitment;
