import React from 'react';
import {
    StyledContentWrapper,
    StyledInstrumentsContentWrapper,
    StyledInstrumentsWrapper,
} from './Instruments.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import Heading from '../../../../../atoms/Headings/Heading';
import Aside from '../../../../../organisms/Aside/Aside';
import { graphql, useStaticQuery } from 'gatsby';
import Accordion from '../../../../../atoms/Accordion/Accordion';

const Instruments = () => {
    const {
        datoCmsInstrument: {
            titleSubject,
            theorySubjectList,
            titleInstrument,
            instrumentsList,
        },
    } = useStaticQuery(graphql`
        query InstrumentsQuery {
            datoCmsInstrument {
                titleSubject
                theorySubjectList {
                    title
                    subjectDescription
                    originalId
                }
                titleInstrument
                instrumentsList {
                    title
                    instrumentDescription
                    originalId
                    instrumentImage {
                        alt
                        title
                        gatsbyImageData
                    }
                    instrumentVideo {
                        title
                        url
                    }
                }
            }
        }
    `);

    return (
        <StyledInstrumentsWrapper>
            <TitleBanner title={'Poznaj instrumenty, na których uczymy'} />
            <StyledContentWrapper>
                <Aside gallery={true} filliate={undefined} />
                <StyledInstrumentsContentWrapper>
                    <Heading
                        type={`h1`}
                        title={'Instrumenty'}
                        teachers={undefined}
                    />
                    <Accordion
                        titleSubject={titleSubject}
                        theorySubjectList={theorySubjectList}
                        titleInstrument={titleInstrument}
                        instrumentsList={instrumentsList}
                    />
                </StyledInstrumentsContentWrapper>
            </StyledContentWrapper>
        </StyledInstrumentsWrapper>
    );
};

export default Instruments;
