import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledSchoolDocuments } from './SchoolDocuments.styles';
import Heading from '../../../../../atoms/Headings/Heading';
import InfoBadge from '../../../../../atoms/InfoBadge/InfoBadge';

const SchoolDocuments = () => {
    const {
        datoCmsSchoolDocument: { title, validDate, date, document },
    } = useStaticQuery(graphql`
        query SchoolDocumentsQuery {
            datoCmsSchoolDocument {
                title
                validDate
                date(formatString: "DD-MM-YYYY", locale: "PL-pl")
                document {
                    originalId
                    documentName
                    documentFile {
                        alt
                        title
                        url
                        originalId
                    }
                }
            }
        }
    `);

    return (
        <StyledSchoolDocuments>
            <Heading type="h1" title={title} />
            <InfoBadge text={validDate} date={date} url="/" label="Start" />
            {document.map(({ originalId, documentName, documentFile }) => (
                <div key={originalId}>
                    <Heading type="h3" title={documentName} />
                    <ul>
                        {documentFile &&
                            documentFile.map((doc) => (
                                <li key={doc.originalId}>
                                    <a
                                        href={doc.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {doc.title}
                                    </a>
                                </li>
                            ))}
                    </ul>
                </div>
            ))}
        </StyledSchoolDocuments>
    );
};

export default SchoolDocuments;
