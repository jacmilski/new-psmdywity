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
                    subelement.slug === nodeLabels.DIRECTORS ||
                    subelement.slug === nodeLabels.LEADERS ||
                    subelement.slug === nodeLabels.TEACHERS ||
                    subelement.slug === nodeLabels.ADMINISTRATION ||
                    subelement.slug === nodeLabels.INSTRUMENTS ||
                    subelement.slug === nodeLabels.WHY_WORTH ||
                    subelement.slug === nodeLabels.FREQUENT_QUESTIONS ||
                    subelement.slug === nodeLabels.TEACHING_METHODS ||
                    subelement.slug === nodeLabels.BUILDING ||
                    subelement.slug === nodeLabels.DIPLOMAS ||
                    subelement.slug === nodeLabels.ARTICLES ||
                    subelement.slug === nodeLabels.POSTERS ||
                    subelement.slug === nodeLabels.SCHOOL_DOCUMENTS ||
                    subelement.slug === nodeLabels.DATA_PROTECTION ||
                    subelement.slug === nodeLabels.ACCESSIBILITY_DECLARATION ||
                    subelement.slug === nodeLabels.DELIVERING_ADDRESS ||
                    subelement.slug === nodeLabels.MUSICIAN_FIRST_CLASS_GALLERY
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
