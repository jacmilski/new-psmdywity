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
