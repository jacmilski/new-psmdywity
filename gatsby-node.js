exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const firstLevelMenu = await graphql(`
        {
            allDatoCmsAsideMenu {
                edges {
                    node {
                        elementyMenu {
                            originalId
                            slug
                            title
                        }
                    }
                }
            }
        }
    `);

    firstLevelMenu.data.allDatoCmsAsideMenu.edges.map(({ node }) => {
        node.elementyMenu.map((element) => {
            if (
                element.slug === 'muzyk-i-klasa' ||
                element.slug === 'plan-zajec' ||
                element.slug === 'oferty-pracy' ||
                element.slug === 'rekrutacja' ||
                element.slug === 'adres-do-doreczen' ||
                element.slug === 'muzyk-i-klasa-dokumenty'
            ) {
                createPage({
                    path: `/${element.slug}`,
                    component: require.resolve(
                        `./src/components/templates/MenuPagesTemplates/FirstLevelPagesTemplate.js`
                    ),
                    context: {
                        originalId: element.originalId,
                        title: element.title,
                        slug: element.slug,
                    },
                });
            }
        });
    });

    const secondLevelMenu = await graphql(`
        {
            allDatoCmsAsideMenu {
                edges {
                    node {
                        elementyMenu {
                            submenuElement {
                                originalId
                                slug
                                title
                            }
                        }
                    }
                }
            }
        }
    `);

    secondLevelMenu.data.allDatoCmsAsideMenu.edges.map(({ node }) => {
        node.elementyMenu.map(({ submenuElement }) => {
            submenuElement.map((subelement) => {
                if (
                    subelement.slug === 'kierownicy-sekcji' ||
                    subelement.slug === 'dyrekcja' ||
                    subelement.slug === 'pedagodzy' ||
                    subelement.slug === 'administracja' ||
                    subelement.slug === 'podstawowe-informacje' ||
                    subelement.slug === 'budowa-siedziby' ||
                    subelement.slug === 'dyplomy' ||
                    subelement.slug === 'artykuly' ||
                    subelement.slug === 'afisze' ||
                    subelement.slug === 'dokumenty-szkolne' ||
                    subelement.slug === 'organ-prowadzacy' ||
                    subelement.slug === 'organ-nadzorujacy' ||
                    subelement.slug === 'ochrona-danych' ||
                    subelement.slug === 'deklaracja-dostepnosci' ||
                    subelement.slug === 'adres-do-doreczen' ||
                    subelement.slug === 'muzyk-i-klasa-galeria'
                ) {
                    createPage({
                        path: `/${subelement.slug}`,
                        component: require.resolve(
                            `./src/components/templates/MenuPagesTemplates/SecondLevelPagesTemplate.js`
                        ),
                        context: {
                            originalId: subelement.originalId,
                            title: subelement.title,
                            slug: subelement.slug,
                        },
                    });
                }
            });
        });
    });
};
