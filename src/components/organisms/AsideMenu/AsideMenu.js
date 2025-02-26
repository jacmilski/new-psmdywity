// @ts-nocheck
import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { NavigationMenu } from 'radix-ui';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import './styles.css';

const AsideMenu = () => {
    const {
        allDatoCmsAsideMenu: { nodes },
    } = useStaticQuery(graphql`
        query AsideMenuQuery {
            allDatoCmsAsideMenu {
                nodes {
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
        <NavigationMenu.Root orientation="vertical">
            <NavigationMenu.List>
                {elems.map(({ title, slug, originalId, submenuElement }) => (
                    <NavigationMenu.Item key={originalId}>
                        <NavigationMenu.Trigger>
                            <Link to={`/${slug}/`}>{title}</Link>
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content>
                            <NavigationMenu.Sub defaultValue="sub1">
                                <NavigationMenu.List>
                                    {submenuElement.map(
                                        ({
                                            title,
                                            slug,
                                            originalId,
                                            submenuElement,
                                        }) =>
                                            slug ? (
                                                <NavigationMenu.Item
                                                    value="sub1"
                                                    key={originalId}
                                                >
                                                    <NavigationMenu.Trigger>
                                                        <Link to={`/${slug}/`}>
                                                            {title}
                                                        </Link>
                                                    </NavigationMenu.Trigger>
                                                    <NavigationMenu.Content>
                                                        <NavigationMenu.Sub value="sub2">
                                                            <NavigationMenu.List>
                                                                {submenuElement.map(
                                                                    ({
                                                                        title,
                                                                        slug,
                                                                        originalId,
                                                                    }) =>
                                                                        slug ? (
                                                                            <NavigationMenu.Item
                                                                                value="sub3"
                                                                                key={
                                                                                    originalId
                                                                                }
                                                                            >
                                                                                <NavigationMenu.Trigger>
                                                                                    <Link
                                                                                        to={`/${slug}/`}
                                                                                    >
                                                                                        {
                                                                                            title
                                                                                        }
                                                                                    </Link>
                                                                                </NavigationMenu.Trigger>
                                                                            </NavigationMenu.Item>
                                                                        ) : null
                                                                )}
                                                            </NavigationMenu.List>
                                                        </NavigationMenu.Sub>
                                                    </NavigationMenu.Content>
                                                </NavigationMenu.Item>
                                            ) : null
                                    )}
                                </NavigationMenu.List>
                            </NavigationMenu.Sub>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                ))}
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
};

export default AsideMenu;
