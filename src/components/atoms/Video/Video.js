import React from 'react';

const Video = ({ url, title }) => (
    <div className="video">
        <iframe
            src={url}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // @ts-ignore
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            frameborder="0"
            width="100%"
            height="350px"
            referrerpolicy="strict-origin-when-cross-origin"
        />
    </div>
);
export default Video;

/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Ry4BzonlVlw?si=7Px4buSj9B8fxQTn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
