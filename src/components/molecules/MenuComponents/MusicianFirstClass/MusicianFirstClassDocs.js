import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StyledMusicianFirstClassDocs } from './MusicianFirstClassDocs.styles';

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
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <div>
                <span>{validDate}:</span> <span>{date}</span>
                {' | '}
                <Link to="/">Start</Link>
            </div>
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
