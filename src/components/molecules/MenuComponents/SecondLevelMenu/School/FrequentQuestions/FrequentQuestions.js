import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
    StyledContentWrapper,
    StyledFAQWrapper,
    StyledFrequentQuestionsWrapper,
} from './FrequentQuestions.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import Aside from '../../../../../organisms/Aside/Aside';
import Heading from '../../../../../atoms/Headings/Heading';
import ReactHtmlParser from 'react-html-parser';

const FrequentQuestions = () => {
    const {
        datoCmsFaqList: { faqElement },
    } = useStaticQuery(graphql`
        query FAQListQuery {
            datoCmsFaqList {
                faqElement {
                    question
                    answer
                    originalId
                }
            }
        }
    `);

    return (
        <StyledFrequentQuestionsWrapper>
            <TitleBanner title={`Częste pytania`} />
            <StyledContentWrapper>
                <Aside gallery={true} filliate={undefined} />
                <StyledFAQWrapper>
                    {faqElement.map(({ question, answer }) => {
                        return (
                            <div className="faq-content">
                                <Heading
                                    type={'h3'}
                                    title={question}
                                    teachers={undefined}
                                />
                                <div>{ReactHtmlParser(answer)}</div>
                            </div>
                        );
                    })}
                </StyledFAQWrapper>
            </StyledContentWrapper>
        </StyledFrequentQuestionsWrapper>
    );
};

export default FrequentQuestions;
