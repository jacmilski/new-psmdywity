import React from 'react';

const SecondLevelPagesTemplate = ({
    pageContext: { originalId, slug, title },
}) => {
    return (
        <div>
            <h2>Tytuł: {title}</h2>
            <h3>Slug: {slug}</h3>
            <h3>ID: {originalId}</h3>
        </div>
    );
};

export default SecondLevelPagesTemplate;
