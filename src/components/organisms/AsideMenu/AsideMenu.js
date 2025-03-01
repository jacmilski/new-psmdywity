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
                        submenuElement {
                            title
                            slug
                            originalId
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

    const [{ elementyMenu: elems }] = nodes;

    console.log(elems);

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
                        ({ title, slug, originalId, submenuElement }) => (
                            <StyledNavigationMenuItem key={originalId}>
                                <StyledNavigationMenuTrigger>
                                    <Link
                                        to={
                                            slug === 'kadra-szkoly' ||
                                            slug === 'szkola' ||
                                            slug === 'nasze-osiagniecia' ||
                                            slug === 'archiwum-wydarzen' ||
                                            slug === 'przepisy-szkolne'
                                                ? '#'
                                                : `/${slug}/`
                                        }
                                    >
                                        {title}
                                    </Link>
                                </StyledNavigationMenuTrigger>
                                <StyledNavigationMenuContent>
                                    <StyledNavigationMenuSub defaultValue="sub1">
                                        <StyledNavigationMenuList>
                                            {submenuElement.map(
                                                ({
                                                    title,
                                                    slug,
                                                    originalId,
                                                    submenuElement,
                                                }) =>
                                                    slug ? (
                                                        <StyledNavigationMenuItem
                                                            value="sub1"
                                                            key={originalId}
                                                        >
                                                            <StyledNavigationMenuTrigger>
                                                                <Link
                                                                    to={`/${slug}/`}
                                                                >
                                                                    {title}
                                                                </Link>
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
