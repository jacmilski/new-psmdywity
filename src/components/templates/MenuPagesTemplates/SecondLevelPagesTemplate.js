import React, { memo } from 'react';
import MenuItemsInnerTemplate from './MenuItemsInnerTemplate';
import Administration from '../../molecules/MenuComponents/SecondLevelMenu/SchoolStuff/Administration/Administration';
import Directors from '../../molecules/MenuComponents/SecondLevelMenu/SchoolStuff/Directors/Directors';
import Leaders from '../../molecules/MenuComponents/SecondLevelMenu/SchoolStuff/Leaders/Leaders';
import Teachers from '../../molecules/MenuComponents/SecondLevelMenu/SchoolStuff/Teachers/Teachers';
import NewResidence from '../../molecules/MenuComponents/SecondLevelMenu/School/NewResidence/NewResidence';
import Diplomas from '../../molecules/MenuComponents/SecondLevelMenu/OurAchievements/Diplomas/Diplomas';
import Articles from '../../molecules/MenuComponents/SecondLevelMenu/OurAchievements/Articles/Articles';
import Posters from '../../molecules/MenuComponents/SecondLevelMenu/OurAchievements/Posters/Posters';
import SchoolDocuments from '../../molecules/MenuComponents/SecondLevelMenu/SchoolRegulations/SchoolDocuments/SchoolDocuments';
import AccessibilityDeclaration from '../../molecules/MenuComponents/SecondLevelMenu/SchoolRegulations/AccessibilityDeclaration/AccessibilityDeclaration';
import MusicianFirstClassGallery from '../../molecules/MenuComponents/SecondLevelMenu/EventsArchive/MusicianFirstClassGallery/MusicianFirstClassGallery';
import Instruments from '../../molecules/MenuComponents/SecondLevelMenu/School/Instruments/Instruments';
import WhyWorth from '../../molecules/MenuComponents/SecondLevelMenu/School/WhyWorth/WhyWorth';
import FrequentQuestions from '../../molecules/MenuComponents/SecondLevelMenu/School/FrequentQuestions/FrequentQuestions';
import TeachingMethods from '../../molecules/MenuComponents/SecondLevelMenu/School/TeachingMethods/TeachingMethods';
//import DataSecurity from '../../molecules/MenuComponents/SecondLevelMenu/SchoolRegulations/DataSecurity/DataSecurity';
import labels from '../../../utilities/labels';

const SecondLevelPagesTemplate = ({
    pageContext: { originalId, slug, title },
}) => {
    return (
        // @ts-ignore
        <MenuItemsInnerTemplate title={title}>
            {slug === labels.DIRECTORS ? (
                <Directors />
            ) : slug === labels.LEADERS ? (
                <Leaders />
            ) : slug === labels.TEACHERS ? (
                <Teachers />
            ) : slug === labels.ADMINISTRATION ? (
                <Administration />
            ) : slug === labels.INSTRUMENTS ? (
                <Instruments />
            ) : slug === labels.WHY_WORTH ? (
                <WhyWorth />
            ) : slug === labels.FREQUENT_QUESTIONS ? (
                <FrequentQuestions />
            ) : slug === labels.TEACHING_METHODS ? (
                <TeachingMethods />
            ) : slug === labels.BUILDING ? (
                <NewResidence />
            ) : slug === labels.DIPLOMAS ? (
                <Diplomas />
            ) : slug === labels.ARTICLES ? (
                <Articles />
            ) : slug === labels.POSTERS ? (
                <Posters />
            ) : slug === labels.SCHOOL_DOCUMENTS ? (
                <SchoolDocuments />
            ) : slug === labels.ACCESSIBILITY_DECLARATION ? (
                <AccessibilityDeclaration />
            ) : slug === labels.MUSICIAN_FIRST_CLASS_GALLERY ? (
                <MusicianFirstClassGallery />
            ) : null}
        </MenuItemsInnerTemplate>
    );
};

export default memo(SecondLevelPagesTemplate);

/* slug === labels.DATA_PROTECTION ? (
                <DataSecurity />
            ) : */
