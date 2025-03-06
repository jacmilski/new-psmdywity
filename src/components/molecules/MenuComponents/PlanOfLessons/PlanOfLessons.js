import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledPlanOfLessons } from './PlanOfLessons.styles';

const PlanOfLessons = () => {
    const {
        allDatoCmsLessonPlan: { nodes },
    } = useStaticQuery(graphql`
        query PlanOfLessonsQuery {
            allDatoCmsLessonPlan {
                nodes {
                    title
                    validDate
                    date(formatString: "DD-MM-YYYY", locale: "PL-pl")
                    originalId
                    lessonsPlanFilliate {
                        filliateName
                        originalId
                        categoryAndFile {
                            planCategory
                            originalId
                            planFile {
                                url
                            }
                        }
                    }
                }
            }
        }
    `);

    console.log(nodes);

    return (
        <StyledPlanOfLessons>
            <h1>{nodes[0].title}</h1>
            <div>
                <span>{nodes[0].validDate}</span> <span>{nodes[0].date}</span>
                {' | '}
                <Link to="/">Start</Link>
            </div>
            {nodes[0].lessonsPlanFilliate.map((filliate) => (
                <div key={filliate.originalId}>
                    <h3>{filliate.filliateName}</h3>
                    <div>
                        {filliate.categoryAndFile.map((element) => (
                            <a
                                href={element.planFile.url}
                                target="_blank"
                                rel="noreferrer"
                                key={element.originalId}
                            >
                                {element.planCategory}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </StyledPlanOfLessons>
    );
};

export default PlanOfLessons;
