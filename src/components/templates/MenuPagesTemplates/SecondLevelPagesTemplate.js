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
            ) : slug === 'instrumenty' ? (
                <Instruments />
            ) : slug === 'dlaczego-warto' ? (
                <WhyWorth />
            ) : slug === 'czeste-pytania' ? (
                <FrequentQuestions />
            ) : slug === 'metody-nauczania' ? (
                <TeachingMethods />
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
