// @ts-nocheck
import React from 'react';
import { HiChevronUp } from 'react-icons/hi2';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Accordion } from 'radix-ui';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Heading from '../Headings/Heading';
import Video from '../Video/Video';
import './styles.css';

const AccordionComp = ({
    titleSubject,
    theorySubjectList,
    titleInstrument,
    instrumentsList,
}) => {
    return (
        <Accordion.Root type="single" collapsible className="acc-root">
            <Heading type={'h2'} title={titleSubject} teachers={undefined} />
            {theorySubjectList &&
                theorySubjectList.length !== 0 &&
                theorySubjectList.map((subject, index) => (
                    <Accordion.Item
                        value={index + 1}
                        key={subject.originalId}
                        className="acc-item"
                    >
                        <Accordion.Header className="acc-header">
                            <Accordion.Trigger className="AccordionTrigger acc-trigger">
                                <span className="title">{subject.title}</span>
                                <HiChevronUp
                                    className="AccordionChevron"
                                    aria-hidden
                                />
                                {/* <ChevronDownIcon
                                className="AccordionChevron"
                                aria-hidden
                            /> */}
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="acc-content">
                            <p className="description">
                                {subject.subjectDescription}
                            </p>
                        </Accordion.Content>
                    </Accordion.Item>
                ))}

            <Heading type={'h2'} title={titleInstrument} teachers={undefined} />
            {instrumentsList &&
                instrumentsList.length !== 0 &&
                instrumentsList.map((instrument, index) => {
                    return (
                        <Accordion.Item
                            value={index + 3}
                            key={instrument.originalId}
                            className="acc-item"
                        >
                            <Accordion.Header className="acc-header">
                                <Accordion.Trigger className="AccordionTrigger acc-trigger">
                                    <span className="title">
                                        {instrument.title}
                                    </span>
                                    <HiChevronUp
                                        className="AccordionChevron"
                                        aria-hidden
                                    />
                                    {/* <ChevronDownIcon
                                    className="AccordionChevron"
                                    aria-hidden
                                /> */}
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="acc-content">
                                <p className="description">
                                    {instrument.instrumentDescription}
                                </p>
                                {instrument.instrumentVideo ? (
                                    <Video
                                        url={
                                            instrument.instrumentVideo
                                                ? instrument.instrumentVideo.url
                                                : ''
                                        }
                                        title={
                                            instrument.instrumentVideo
                                                ? instrument.instrumentVideo
                                                      .title
                                                : ''
                                        }
                                        key={instrument.originalId}
                                    />
                                ) : instrument.instrumentImage ? (
                                    <GatsbyImage
                                        alt={''}
                                        // @ts-ignore
                                        image={getImage(
                                            instrument.instrumentImage
                                                .gatsbyImageData
                                        )}
                                    />
                                ) : null}
                            </Accordion.Content>
                        </Accordion.Item>
                    );
                })}
        </Accordion.Root>
    );
};

export default AccordionComp;
