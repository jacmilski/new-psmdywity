import React, { memo } from 'react';
import MenuItemsInnerTemplate from './MenuItemsInnerTemplate';
import PlanOfLessons from '../../molecules/MenuComponents/FirstLevelMenu/PlanOfLessons/PlanOfLessons';
import JobOffers from '../../molecules/MenuComponents/FirstLevelMenu/JobOffers/JobOffers';
import Recruitment from '../../molecules/MenuComponents/FirstLevelMenu/Recruitment/Recruitment';
import DeliveringAddress from '../../molecules/MenuComponents/FirstLevelMenu/DeliveringAddress/DeliveringAddress';
import MusicianFirstClassDocs from '../../molecules/MenuComponents/FirstLevelMenu/MusicianFirstClassDocuments/MusicianFirstClassDocs';
import labels from '../../../utilities/labels';

const FirstLevelPagesTemplate = ({
    pageContext: { originalId, slug, title },
}) => {
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

export default memo(FirstLevelPagesTemplate);
