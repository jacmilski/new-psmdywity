import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {
    StyledTabsContent,
    StyledTabsInnerContent,
} from './TabsContent.styles';
import Heading from '../../atoms/Headings/Heading';

const TabsContent = ({ data, value }) => {
    return (
        <StyledTabsContent value={value}>
            <div>
                {data.map(({ title, subtitle, content, originalId }) => {
                    return (
                        <StyledTabsInnerContent key={originalId}>
                            <Heading
                                type={'h3'}
                                title={title}
                                teachers={undefined}
                            />
                            {subtitle ? (
                                <h4 className="subtitle">{subtitle}</h4>
                            ) : null}
                            <div>{ReactHtmlParser(content)}</div>
                        </StyledTabsInnerContent>
                    );
                })}
            </div>
        </StyledTabsContent>
    );
};

export default TabsContent;
