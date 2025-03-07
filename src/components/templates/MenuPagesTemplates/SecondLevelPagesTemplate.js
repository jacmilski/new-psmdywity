import React from 'react';
import MenuItemsInnerTemplate from './MenuItemsInnerTemplate';
import Administration from '../../molecules/MenuComponents/Administration/Administration';
import Directors from '../../molecules/MenuComponents/Directors/Directors';
import Leaders from '../../molecules/MenuComponents/Leaders/Leaders';
import Teachers from '../../molecules/MenuComponents/Teachers/Teachers';
import BasicInformation from '../../molecules/MenuComponents/BasicInformation/BasicInformation';
import NewResidence from '../../molecules/MenuComponents/NewResidence/NewResidence';
import Diplomas from '../../molecules/MenuComponents/Diplomas/Diplomas';
import Articles from '../../molecules/MenuComponents/Articles/Articles';
import Posters from '../../molecules/MenuComponents/Posters/Posters';
import SchoolDocuments from '../../molecules/MenuComponents/SchoolDocuments/SchoolDocuments';
import ProvideringOrgan from '../../molecules/MenuComponents/ProvideringOrgan/ProvideringOrgan';
import SupervisingOrgan from '../../molecules/MenuComponents/SupervisingOrgan/SupervisingOrgan';
import DataSecurity from '../../molecules/MenuComponents/DataSecurity/DataSecurity';
import AccessibilityDeclaration from '../../molecules/MenuComponents/AccessibilityDeclaration/AccessibilityDeclaration';
import MusicianFirstClassGallery from '../../molecules/MenuComponents/MusicianFirstClass/MusicianFirstClassGallery';
import { labels } from '../../../utilities/labels';

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
            ) : slug === labels.BASIC_INFORMATION ? (
                <BasicInformation />
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
            ) : slug === labels.LEADING_ORGAN ? (
                <ProvideringOrgan />
            ) : slug === labels.SUPERVISORY_ORGAN ? (
                <SupervisingOrgan />
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
