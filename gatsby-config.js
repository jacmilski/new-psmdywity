/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: `psm-dywity`,
        description: `Samorządowa Szkoła Muzyczna I st. w Dywitach w Powiecie Olsztyńskim. Szkoła prowadzi naukę gry na instrumentach muzycznych oraz zajęcia z wiedzy o muzyce.`,
        author: `Jacek Michalski`,
        image: ``,
        keywords: `szkoła muzyczna, muzyka, dywity, olsztyn, nauka gry na instrumentach, wiedza o muzyce`,
        siteUrl: `https://www.new-psmdywity.org`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-datocms',
            options: {
                apiToken: process.env.DATO_CMS_API_TOKEN,
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: 'dominantColor',
                    quality: 90,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `psm-dywity`,
                short_name: `PSMDywity`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `src/images/icon.png`,
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.new-psmdywity.org',
                sitemap: 'https://www.new-psmdywity.org/sitemap-index.xml',
                policy: [
                    process.env.NODE_ENV === 'production'
                        ? { userAgent: '*', allow: '/' }
                        : { userAgent: '*', disallow: '/' },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                query: `
                {
                    allSitePage {
                        nodes {
                            path
                        }
                    }
                    site {
                        siteMetadata {
                            siteUrl
                        }
                    }
                }
            `,
                resolveSiteUrl: ({
                    site: {
                        siteMetadata: { siteUrl },
                    },
                }) => siteUrl,
                resolvePages: ({
                    allSitePage: { nodes: allPages },
                    site: {
                        siteMetadata: { siteUrl },
                    },
                }) =>
                    allPages.map(({ path }) => ({
                        url: `${siteUrl}${path}`,
                        path,
                        changefreq: `daily`,
                        priority: 0.7,
                    })),
                serialize: ({ path }) => ({
                    url: path,
                }),
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
    ],
};
