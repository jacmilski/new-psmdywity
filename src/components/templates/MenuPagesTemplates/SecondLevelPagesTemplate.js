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

const SecondLevelPagesTemplate = ({
    pageContext: { originalId, slug, title },
}) => {
    return (
        // @ts-ignore
        <MenuItemsInnerTemplate title={title}>
            {slug === 'dyrekcja' ? (
                <Directors />
            ) : slug === 'kierownicy-sekcji' ? (
                <Leaders />
            ) : slug === 'pedagodzy' ? (
                <Teachers />
            ) : slug === 'administracja' ? (
                <Administration />
            ) : slug === 'podstawowe-informacje' ? (
                <BasicInformation />
            ) : slug === 'budowa-siedziby' ? (
                <NewResidence />
            ) : slug === 'dyplomy' ? (
                <Diplomas />
            ) : slug === 'artykuly' ? (
                <Articles />
            ) : slug === 'afisze' ? (
                <Posters />
            ) : slug === 'dokumenty-szkolne' ? (
                <SchoolDocuments />
            ) : slug === 'organ-prowadzący' ? (
                <ProvideringOrgan />
            ) : slug === 'organ-nadzorujacy' ? (
                <SupervisingOrgan />
            ) : slug === 'ochrona-danych' ? (
                <DataSecurity />
            ) : slug === 'deklaracja-dostepnosci' ? (
                <AccessibilityDeclaration />
            ) : slug === 'muzyk-i-klasa-galeria' ? (
                <MusicianFirstClassGallery />
            ) : null}
        </MenuItemsInnerTemplate>
    );
};

export default SecondLevelPagesTemplate;
