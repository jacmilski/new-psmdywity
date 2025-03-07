// @ts-nocheck
import React from 'react';
import MenuItemsInnerTemplate from './MenuItemsInnerTemplate';
import PlanOfLessons from '../../molecules/MenuComponents/PlanOfLessons/PlanOfLessons';
import JobOffers from '../../molecules/MenuComponents/JobOffers/JobOffers';
import Recruitment from '../../molecules/MenuComponents/Recruitment/Recruitment';
import DeliveringAddress from '../../molecules/MenuComponents/DeliveringAddress/DeliveringAddress';
import MusicianFirstClassDocs from '../../molecules/MenuComponents/MusicianFirstClass/MusicianFirstClassDocs';
import { labels } from '../../../utilities/labels';

const FirstLevelPagesTemplate = ({
    pageContext: { originalId, slug, title },
}) => {
    console.log(slug);
    return (
        // @ts-ignore
        <MenuItemsInnerTemplate title={title}>
            {slug && slug === labels.LESSON_PLANS ? (
                <PlanOfLessons />
            ) : slug === labels.JOB_OFFERS ? (
                <JobOffers />
            ) : slug === labels.RECRUITMENT ? (
                <Recruitment />
            ) : slug === labels.DELIVERING_ADDRESS ? (
                <DeliveringAddress />
            ) : slug === labels.MUSICIAN_FIRST_CLASS_DOCUMENTS ? (
                <MusicianFirstClassDocs />
            ) : null}
        </MenuItemsInnerTemplate>
    );
};

export default FirstLevelPagesTemplate;
