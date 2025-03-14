import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledPlanOfLessons } from './PlanOfLessons.styles';
import Heading from '../../../../atoms/Headings/Heading';
import InfoBadge from '../../../../atoms/InfoBadge/InfoBadge';

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

    return (
        <StyledPlanOfLessons>
            <Heading type="h1" title={nodes[0].title} teachers={undefined} />
            <InfoBadge
                text={nodes[0].validDate}
                date={nodes[0].date}
                url="/"
                label="Start"
            />
            {nodes[0].lessonsPlanFilliate.map((filliate) => (
                <div key={filliate.originalId}>
                    <Heading
                        type="h3"
                        title={filliate.filliateName}
                        teachers={undefined}
                    />
                    <ul>
                        {filliate.categoryAndFile.map((element) => (
                            <li>
                                <a
                                    href={element.planFile.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={element.originalId}
                                >
                                    {element.planCategory}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </StyledPlanOfLessons>
    );
};

export default PlanOfLessons;
