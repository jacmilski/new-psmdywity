const labels = require('./labels');

// @ts-nocheck
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
                element.slug === labels.MUSICIAN_FIRST_CLASS ||
                element.slug === labels.LESSON_PLANS ||
                element.slug === labels.JOB_OFFERS ||
                element.slug === labels.RECRUITMENT ||
                element.slug === labels.CANCELLED_LESSONS ||
                element.slug === labels.DELIVERING_ADDRESS ||
                element.slug === labels.MUSICIAN_FIRST_CLASS_DOCUMENTS
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
                    subelement.slug === labels.LEADERS ||
                    subelement.slug === labels.DIRECTORS ||
                    subelement.slug === labels.TEACHERS ||
                    subelement.slug === labels.ADMINISTRATION ||
                    subelement.slug === labels.BASIC_INFORMATION ||
                    subelement.slug === labels.BUILDING ||
                    subelement.slug === labels.DIPLOMAS ||
                    subelement.slug === labels.ARTICLES ||
                    subelement.slug === labels.POSTERS ||
                    subelement.slug === labels.SCHOOL_DOCUMENTS ||
                    subelement.slug === labels.LEADING_ORGAN ||
                    subelement.slug === labels.SUPERVISORY_ORGAN ||
                    subelement.slug === labels.DATA_PROTECTION ||
                    subelement.slug === labels.ACCESSIBILITY_DECLARATION ||
                    subelement.slug === labels.DELIVERING_ADDRESS ||
                    subelement.slug === labels.MUSICIAN_FIRST_CLASS_GALLERY
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
