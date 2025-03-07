// @ts-nocheck
import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link, useStaticQuery, graphql } from 'gatsby';
import './styles.css';
import {
    StyledAsideMenuWrapper,
    StyledNavigationMenuContent,
    StyledNavigationMenuItem,
    StyledNavigationMenuList,
    StyledNavigationMenuRoot,
    StyledNavigationMenuTrigger,
    StyledNavigationMenuSub,
} from './AsideMenu.styles';
import { labels } from '../../../utilities/labels';

const AsideMenu = () => {
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
                            submenuElement {
                                title
                                slug
                                originalId
                            }
                        }
                    }
                }
            }
        }
    `);

    //console.log(nodes);

    const [{ elementyMenu: elems }] = nodes;

    return (
        <StyledAsideMenuWrapper>
            <GatsbyImage
                image={getImage(nodes[0].asideMenuBackground)}
                alt={nodes[0].asideMenuBackground.alt}
            />
            <GatsbyImage
                image={getImage(nodes[0].asideMenuBackground)}
                alt={nodes[0].asideMenuBackground.alt}
                className="note-2"
            />
            <GatsbyImage
                image={getImage(nodes[0].asideMenuBackground)}
                alt={nodes[0].asideMenuBackground.alt}
                className="note-3"
            />
            <StyledNavigationMenuRoot orientation="vertical">
                <StyledNavigationMenuList>
                    {elems.map(
                        ({
                            title,
                            slug,
                            originalId,
                            webPageLink,
                            submenuElement,
                        }) => (
                            <StyledNavigationMenuItem key={originalId}>
                                <StyledNavigationMenuTrigger>
                                    {(webPageLink &&
                                        slug === labels.TREASURY_OF_IDEAS) ||
                                    slug === labels.CREATIVITY_ZONE ||
                                    slug === labels.EVENTS_ARCHIVE ||
                                    slug === labels.CEA ||
                                    slug === labels.ELECTRONIC_DIARY ? (
                                        <a
                                            href={
                                                webPageLink &&
                                                webPageLink.webPageAddress
                                            }
                                            target="_blanc"
                                            rel="noreferrer"
                                        >
                                            {title}
                                        </a>
                                    ) : (
                                        <Link
                                            to={
                                                slug === labels.SCHOOL_STAFF ||
                                                slug === labels.SCHOOL ||
                                                slug ===
                                                    labels.OUR_ACHIEVEMENTS ||
                                                slug ===
                                                    labels.EVENTS_ARCHIVE ||
                                                slug ===
                                                    labels.SCHOOL_REGULATIONS
                                                    ? '#'
                                                    : `/${slug}/`
                                            }
                                        >
                                            {title}
                                        </Link>
                                    )}
                                </StyledNavigationMenuTrigger>
                                <StyledNavigationMenuContent>
                                    <StyledNavigationMenuSub defaultValue="sub1">
                                        <StyledNavigationMenuList>
                                            {submenuElement.map(
                                                ({
                                                    title,
                                                    slug,
                                                    originalId,
                                                    webPageLink,
                                                    submenuElement,
                                                }) =>
                                                    slug ? (
                                                        <StyledNavigationMenuItem
                                                            value="sub1"
                                                            key={originalId}
                                                        >
                                                            <StyledNavigationMenuTrigger>
                                                                {webPageLink &&
                                                                slug ===
                                                                    labels.LEADING_ORGAN ? (
                                                                    <a
                                                                        href={
                                                                            webPageLink.webPageAddress
                                                                        }
                                                                        target="_blanc"
                                                                        rel="noreferrer"
                                                                    >
                                                                        {title}
                                                                    </a>
                                                                ) : slug ===
                                                                  labels.SUPERVISORY_ORGAN ? (
                                                                    <a
                                                                        href={
                                                                            webPageLink.webPageAddress
                                                                        }
                                                                        target="_blanc"
                                                                        rel="noreferrer"
                                                                    >
                                                                        {title}
                                                                    </a>
                                                                ) : (
                                                                    <Link
                                                                        to={`/${slug}/`}
                                                                    >
                                                                        {title}
                                                                    </Link>
                                                                )}
                                                            </StyledNavigationMenuTrigger>
                                                            <StyledNavigationMenuContent>
                                                                <StyledNavigationMenuSub value="sub2">
                                                                    <StyledNavigationMenuList>
                                                                        {submenuElement.map(
                                                                            ({
                                                                                title,
                                                                                slug,
                                                                                originalId,
                                                                            }) =>
                                                                                slug ? (
                                                                                    <StyledNavigationMenuItem
                                                                                        value="sub3"
                                                                                        key={
                                                                                            originalId
                                                                                        }
                                                                                    >
                                                                                        <StyledNavigationMenuTrigger>
                                                                                            <Link
                                                                                                to={`/${slug}/`}
                                                                                            >
                                                                                                {
                                                                                                    title
                                                                                                }
                                                                                            </Link>
                                                                                        </StyledNavigationMenuTrigger>
                                                                                    </StyledNavigationMenuItem>
                                                                                ) : null
                                                                        )}
                                                                    </StyledNavigationMenuList>
                                                                </StyledNavigationMenuSub>
                                                            </StyledNavigationMenuContent>
                                                        </StyledNavigationMenuItem>
                                                    ) : null
                                            )}
                                        </StyledNavigationMenuList>
                                    </StyledNavigationMenuSub>
                                </StyledNavigationMenuContent>
                            </StyledNavigationMenuItem>
                        )
                    )}
                </StyledNavigationMenuList>
            </StyledNavigationMenuRoot>
        </StyledAsideMenuWrapper>
    );
};

export default AsideMenu;
