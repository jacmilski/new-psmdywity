import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledMusicianFirstClassDocs } from './MusicianFirstClassDocs.styles';
import InfoBadge from '../../../atoms/InfoBadge/InfoBadge';
import Heading from '../../../atoms/Headings/Heading';

const MusicianFirstClassDocs = () => {
    const {
        datoCmsMikDocument: { title, subtitle, docsFile, validDate, date },
    } = useStaticQuery(graphql`
        query MIKDocumentsQuery {
            datoCmsMikDocument {
                title
                subtitle
                validDate
                date(formatString: "DD-MM-YYYY", locale: "PL-pl")
                docsFile {
                    alt
                    originalId
                    title
                    url
                }
            }
        }
    `);

    return (
        <StyledMusicianFirstClassDocs>
            <Heading type="h2" title={title} />
            <Heading type="h3" title={subtitle} />
            <InfoBadge text={validDate} date={date} url="/" label="Start" />
            <ul>
                {docsFile.map((doc) => (
                    <li key={doc.originalId}>
                        <a href={doc.url} target="_blanc" rel="noreferrer">
                            {doc.title}
                        </a>
                    </li>
                ))}
            </ul>
        </StyledMusicianFirstClassDocs>
    );
};

export default MusicianFirstClassDocs;
