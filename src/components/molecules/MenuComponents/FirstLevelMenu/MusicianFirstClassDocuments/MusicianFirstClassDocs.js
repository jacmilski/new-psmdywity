import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledMusicianFirstClassDocs } from './MusicianFirstClassDocs.styles';
import InfoBadge from '../../../../atoms/InfoBadge/InfoBadge';
import Heading from '../../../../atoms/Headings/Heading';
import TitleBanner from '../../../TitleBanner/TitleBanner';

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
            <TitleBanner title={title} />
            <div className="info">
                <Heading type="h2" title={title} teachers={undefined} />
                <Heading type="h3" title={subtitle} teachers={undefined} />
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
            </div>
        </StyledMusicianFirstClassDocs>
    );
};

export default MusicianFirstClassDocs;
