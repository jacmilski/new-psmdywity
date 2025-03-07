// @ts-nocheck
import React from 'react';
import MenuItemsInnerTemplate from './MenuItemsInnerTemplate';
import PlanOfLessons from '../../molecules/MenuComponents/PlanOfLessons/PlanOfLessons';
import JobOffers from '../../molecules/MenuComponents/JobOffers/JobOffers';
import Recruitment from '../../molecules/MenuComponents/Recruitment/Recruitment';
import DeliveringAddress from '../../molecules/MenuComponents/DeliveringAddress/DeliveringAddress';
import MusicianFirstClassDocs from '../../molecules/MenuComponents/MusicianFirstClass/MusicianFirstClassDocs';

const FirstLevelPagesTemplate = ({
    pageContext: { originalId, slug, title },
}) => {
    console.log(slug);
    return (
        // @ts-ignore
        <MenuItemsInnerTemplate title={title}>
            {slug && slug === 'plan-zajec' ? (
                <PlanOfLessons />
            ) : slug === 'oferty-pracy' ? (
                <JobOffers />
            ) : slug === 'rekrutacja' ? (
                <Recruitment />
            ) : slug === 'adres-do-doreczen' ? (
                <DeliveringAddress />
            ) : slug === 'muzyk-i-klasa-dokumenty' ? (
                <MusicianFirstClassDocs />
            ) : null}
        </MenuItemsInnerTemplate>
    );
};

export default FirstLevelPagesTemplate;
