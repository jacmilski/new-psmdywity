import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledAccessibilityDeaclaration } from './AccessibilityDeclaration.styles';
import InfoBadge from '../../../../../atoms/InfoBadge/InfoBadge';

const AccessibilityDeclaration = () => {
    const {
        datoCmsAccessibilityDeclaration: { validDate, date, document },
    } = useStaticQuery(graphql`
        query accessibilityDeclarationQuery {
            datoCmsAccessibilityDeclaration {
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
        <StyledAccessibilityDeaclaration>
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
        </StyledAccessibilityDeaclaration>
    );
};

export default AccessibilityDeclaration;
