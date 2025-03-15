import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
    StyledContactWrapper,
    StyledDataSecurity,
} from './DataSecurity.styles';
import Heading from '../../../../../atoms/Headings/Heading';
import InfoBadge from '../../../../../atoms/InfoBadge/InfoBadge';
import TitleBanner from '../../../../TitleBanner/TitleBanner';

const DataSecurity = () => {
    const {
        datoCmsDataSecurity: { validDate, date, contactData, document },
    } = useStaticQuery(graphql`
        query MyQuery {
            datoCmsDataSecurity {
                validDate
                date(formatString: "DD-MM-YYYY", locale: "PL-pl")
                contactData
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
        <StyledDataSecurity>
            <TitleBanner title={`Ochrona danych osobowych`} />
            <div className="info">
                <Heading
                    type="h2"
                    title={`Ochrona Danych Osobowych`}
                    teachers={undefined}
                />
                <InfoBadge text={validDate} date={date} url="/" label="Start" />
                <ul>
                    {document.map((doc) => (
                        <li key={doc.originalId}>
                            <a href={doc.url} target="_blanc" rel="noreferrer">
                                {doc.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <Heading type="h3" title="Kontakt" teachers={undefined} />
                <StyledContactWrapper>
                    <pre>{contactData}</pre>
                </StyledContactWrapper>
            </div>
        </StyledDataSecurity>
    );
};

export default DataSecurity;
