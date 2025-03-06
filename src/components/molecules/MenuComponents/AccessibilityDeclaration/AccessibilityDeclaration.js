import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StyledAccessibilityDeaclaration } from './AccessibilityDeclaration.styles';

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
            <div>
                <span>{validDate}</span> <span>{date}</span>
                {' | '}
                <Link to="/">Start</Link>
            </div>
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
