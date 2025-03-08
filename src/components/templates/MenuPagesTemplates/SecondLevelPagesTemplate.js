import React from 'react';
import MenuItemsInnerTemplate from './MenuItemsInnerTemplate';
import Administration from '../../molecules/MenuComponents/Administration/Administration';
import Directors from '../../molecules/MenuComponents/Directors/Directors';
import Leaders from '../../molecules/MenuComponents/Leaders/Leaders';
import Teachers from '../../molecules/MenuComponents/Teachers/Teachers';
import NewResidence from '../../molecules/MenuComponents/NewResidence/NewResidence';
import Diplomas from '../../molecules/MenuComponents/Diplomas/Diplomas';
import Articles from '../../molecules/MenuComponents/Articles/Articles';
import Posters from '../../molecules/MenuComponents/Posters/Posters';
import SchoolDocuments from '../../molecules/MenuComponents/SchoolDocuments/SchoolDocuments';
import DataSecurity from '../../molecules/MenuComponents/DataSecurity/DataSecurity';
import AccessibilityDeclaration from '../../molecules/MenuComponents/AccessibilityDeclaration/AccessibilityDeclaration';
import MusicianFirstClassGallery from '../../molecules/MenuComponents/MusicianFirstClass/MusicianFirstClassGallery';
import Instruments from '../../molecules/MenuComponents/Instruments/Instruments';
import WhyWorth from '../../molecules/MenuComponents/WhyWorth/WhyWorth';
import FrequentQuestions from '../../molecules/MenuComponents/FrequentQuestions/FrequentQuestions';
import TeachingMethods from '../../molecules/MenuComponents/TeachingMethods/TeachingMethods';
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
            ) : slug === labels.DATA_PROTECTION ? (
                <DataSecurity />
            ) : slug === labels.ACCESSIBILITY_DECLARATION ? (
                <AccessibilityDeclaration />
            ) : slug === labels.MUSICIAN_FIRST_CLASS_GALLERY ? (
                <MusicianFirstClassGallery />
            ) : null}
        </MenuItemsInnerTemplate>
    );
};

export default SecondLevelPagesTemplate;
