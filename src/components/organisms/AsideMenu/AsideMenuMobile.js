import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import './styles.css';
import {
    StyledAsideMenuWrapper,
    StyledNavigationMenuContent,
    StyledNavigationMenuItem,
    StyledNavigationMenuList,
    StyledNavigationMenuRoot,
    StyledNavigationMenuTrigger,
} from './AsideMenuMobile.styles';
import labels from '../../../utilities/labels';
// @ts-ignore
import MoveRightIcon from '../../../images/icons/icons8-move-right-24.png';
// @ts-ignore
import MoveLeftIcon from '../../../images/icons/icons8-move-left-24.png';

const AsideMenuMobile = ({ isOpen, showMenu, isShownMenu, openMenu }) => {
    const {
        allDatoCmsAsideMenu: { nodes },
    } = useStaticQuery(graphql`
        query AsideMenuQuery {
            allDatoCmsAsideMenu {
                nodes {
                    asideMenuBackground {
                        alt
                        title
                        gatsbyImageData
                    }
                    elementyMenu {
                        title
                        slug
                        originalId
                        webPageLink {
                            ... on DatoCmsSkarbnicaPomyslow {
                                id
                                webPageAddress
                            }
                            ... on DatoCmsStrefaTworczosci {
                                id
                                webPageAddress
                            }
                            ... on DatoCmsCea {
                                id
                                webPageAddress
                            }
                            ... on DatoCmsDziennikElektroniczny {
                                id
                                webPageAddress
                            }
                        }
                        submenuElement {
                            title
                            slug
                            originalId
                            webPageLink {
                                ... on DatoCmsSupervisoryOrgan {
                                    webPageAddress
                                    originalId
                                }
                                ... on DatoCmsProvideringOrgan {
                                    id
                                    webPageAddress
                                    originalId
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const [{ elementyMenu: elems }] = nodes;

    return (
        <StyledAsideMenuWrapper
            // @ts-ignore
            $isOpen={isOpen}
        >
            <img
                src={isShownMenu ? MoveRightIcon : MoveLeftIcon}
                alt="open or close menu panel"
                onClick={() => showMenu()}
            />
            <StyledNavigationMenuRoot orientation="vertical">
                <StyledNavigationMenuList>
                    {elems.map((elem) => (
                        <StyledNavigationMenuItem key={elem.originalId}>
                            {(elem.webPageLink &&
                                elem.slug === labels.TREASURY_OF_IDEAS) ||
                            elem.slug === labels.CREATIVITY_ZONE ||
                            elem.slug === labels.EVENTS_ARCHIVE ||
                            elem.slug === labels.CEA ||
                            elem.slug === labels.ELECTRONIC_DIARY ? (
                                <StyledNavigationMenuTrigger
                                    key={elem.originalId}
                                >
                                    <a
                                        href={
                                            elem.webPageLink &&
                                            elem.webPageLink.webPageAddress
                                        }
                                        target="_blanc"
                                        rel="noreferrer"
                                    >
                                        {elem.title}
                                    </a>
                                </StyledNavigationMenuTrigger>
                            ) : elem.slug === labels.SCHOOL_STAFF ||
                              elem.slug === labels.SCHOOL ||
                              elem.slug === labels.OUR_ACHIEVEMENTS ||
                              elem.slug === labels.EVENTS_ARCHIVE ||
                              elem.slug === labels.SCHOOL_REGULATIONS ? (
                                <StyledNavigationMenuTrigger className="link">
                                    {elem.title}
                                </StyledNavigationMenuTrigger>
                            ) : (
                                <StyledNavigationMenuTrigger
                                    key={elem.originalId}
                                    onClick={() => openMenu()}
                                >
                                    <Link to={`/${elem.slug}/`}>
                                        {elem.title}
                                    </Link>
                                </StyledNavigationMenuTrigger>
                            )}
                            {elem.submenuElement.map((elem) => (
                                <StyledNavigationMenuContent
                                    key={elem.originalId}
                                >
                                    {(elem.webPageLink &&
                                        elem.slug ===
                                            labels.SUPERVISORY_ORGAN) ||
                                    elem.slug === labels.LEADING_ORGAN ? (
                                        <StyledNavigationMenuTrigger
                                            key={elem.originalId}
                                        >
                                            <a
                                                href={
                                                    elem.webPageLink &&
                                                    elem.webPageLink
                                                        .webPageAddress
                                                }
                                                target="_blanc"
                                                rel="noreferrer"
                                            >
                                                {elem.title}
                                            </a>
                                        </StyledNavigationMenuTrigger>
                                    ) : (
                                        <StyledNavigationMenuTrigger
                                            key={elem.originalId}
                                            onClick={() => openMenu()}
                                        >
                                            <Link to={`/${elem.slug}/`}>
                                                {elem.title}
                                            </Link>
                                        </StyledNavigationMenuTrigger>
                                    )}
                                </StyledNavigationMenuContent>
                            ))}
                        </StyledNavigationMenuItem>
                    ))}
                </StyledNavigationMenuList>
            </StyledNavigationMenuRoot>
        </StyledAsideMenuWrapper>
    );
};

export default React.memo(AsideMenuMobile);
