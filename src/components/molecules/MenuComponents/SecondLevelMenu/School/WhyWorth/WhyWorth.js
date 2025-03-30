import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
    StyledArticlesWrapper,
    StyledContentWrapper,
    StyledWhyWorthWrapper,
} from './WhyWorth.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import Aside from '../../../../../organisms/Aside/Aside';
import Heading from '../../../../../atoms/Headings/Heading';
import ReactHtmlParser from 'react-html-parser';

const WhyWorth = () => {
    const {
        datoCmsWhyWorth: { whyWorthArticles },
    } = useStaticQuery(graphql`
        query WhyWorthQuery {
            datoCmsWhyWorth {
                whyWorthArticles {
                    title
                    subtitle
                    articleContent
                    sourceLink
                    originalId
                }
            }
        }
    `);

    console.log(whyWorthArticles);

    return (
        <StyledWhyWorthWrapper>
            <TitleBanner title={`Dlaczego warto uczyć się w naszej szkole?`} />
            <StyledContentWrapper>
                <Aside gallery={true} filliate={undefined} />
                <StyledArticlesWrapper>
                    {whyWorthArticles.map((article) => {
                        return (
                            <div
                                className="article-element"
                                key={article.originalId}
                            >
                                <Heading
                                    type={'h2'}
                                    title={article.title}
                                    teachers={undefined}
                                />
                                <div className="subtitle">
                                    {article.subtitle}
                                </div>
                                <div className="content">
                                    {ReactHtmlParser(article.articleContent)}
                                </div>
                                <span className="link">
                                    <a href={article.sourceLink}>
                                        Czytaj więcej
                                    </a>
                                </span>
                            </div>
                        );
                    })}
                </StyledArticlesWrapper>
            </StyledContentWrapper>
        </StyledWhyWorthWrapper>
    );
};

export default WhyWorth;
