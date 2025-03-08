const nodeLabels = require('./node-labels');

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
                element.slug === nodeLabels.MUSICIAN_FIRST_CLASS_DOCUMENTS ||
                element.slug === nodeLabels.LESSON_PLANS ||
                element.slug === nodeLabels.JOB_OFFERS ||
                element.slug === nodeLabels.RECRUITMENT ||
                element.slug === nodeLabels.DELIVERING_ADDRESS
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
                    subelement.slug === 'instrumenty' ||
                    subelement.slug === 'dlaczego-warto' ||
                    subelement.slug === 'czeste-pytania' ||
                    subelement.slug === 'metody-nauczania' ||
                    subelement.slug === 'budowa-siedziby' ||
                    subelement.slug === 'dyplomy' ||
                    subelement.slug === 'artykuly' ||
                    subelement.slug === 'afisze' ||
                    subelement.slug === 'dokumenty-szkolne' ||
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
