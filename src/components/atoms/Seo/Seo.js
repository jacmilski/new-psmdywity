import React from 'react';
import { useSiteMetadata } from '../../../hooks/useSiteMetadata';

const Seo = ({ pathname }) => {
    const { title, description, author, image, siteUrl } = useSiteMetadata();

    const seo = {
        title: title || ``,
        description: description || ``,
        author: author || ``,
        image: image || ``,
        url: `${siteUrl}${pathname}`,
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta name="robots" content="noindex" />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:creator" content={seo.twitterUsername} />
            <link
                rel="icon"
                href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
            />
        </>
    );
};

export default Seo;
