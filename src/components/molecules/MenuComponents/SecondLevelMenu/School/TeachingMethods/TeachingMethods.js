import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import {
    StyledContentWrapper,
    StyledTabsContent,
    StyledTabsList,
    StyledTabsRoot,
    StyledTabsTrigger,
    StyledTeachingMethodsContent,
    StyledTeachingMethodsWrapper,
} from './TeachingMethods.styles';
import Aside from '../../../../../organisms/Aside/Aside';
import ReactHtmlParser from 'react-html-parser';
import Heading from '../../../../../atoms/Headings/Heading';
import TabsContent from '../../../../TabsContent/TabsContent';

const TeachingMethods = () => {
    const {
        datoCmsSuzukiMethod: {
            originalId: suzukiId,
            label: suzukiLabel,
            suzukiMethodList,
        },
        datoCmsColorStringsMethod: {
            originalId: stringsId,
            label: stringsLabel,
            colorStringsMethodList,
        },
        datoCmsCommonMethod: {
            originalId: commonId,
            label: commonLabel,
            commonMethodList,
        },
    } = useStaticQuery(graphql`
        query TeachinMethodsQuery {
            datoCmsSuzukiMethod {
                originalId
                label
                suzukiMethodList {
                    title
                    subtitle
                    content
                    originalId
                }
            }
            datoCmsColorStringsMethod {
                originalId
                label
                colorStringsMethodList {
                    title
                    subtitle
                    content
                    originalId
                }
            }
            datoCmsCommonMethod {
                originalId
                label
                commonMethodList {
                    title
                    subtitle
                    content
                    originalId
                }
            }
        }
    `);

    return (
        <StyledTeachingMethodsWrapper>
            <TitleBanner title={`Metody nauczania`} />
            <StyledContentWrapper>
                <Aside gallery={true} filliate={undefined} />
                <StyledTabsRoot defaultValue="tab1" data-orientation="vertical">
                    <StyledTabsList aria-label="tabs example">
                        <StyledTabsTrigger value="tab1">
                            {suzukiLabel}
                        </StyledTabsTrigger>
                        <StyledTabsTrigger value="tab2">
                            {stringsLabel}
                        </StyledTabsTrigger>
                        <StyledTabsTrigger value="tab3">
                            {commonLabel}
                        </StyledTabsTrigger>
                    </StyledTabsList>
                    <TabsContent data={suzukiMethodList} value={'tab1'} />
                    <TabsContent data={colorStringsMethodList} value={'tab2'} />
                    <TabsContent data={commonMethodList} value={'tab3'} />
                </StyledTabsRoot>
            </StyledContentWrapper>
        </StyledTeachingMethodsWrapper>
    );
};

export default TeachingMethods;
