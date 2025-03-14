import React, { memo } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { StyledNewsfeed, StyledMediaWrapper } from './Newsfeed.styles';
import { Link } from 'gatsby';
import Video from '../../atoms/Video/Video';

const Newsfeed = ({ data }) => {
    const {
        message,
        imageForMessage,
        imageDescription,
        videoForMessage,
        videoDescription,
        tag,
        filliates,
        title,
        messageDate,
    } = data;

    return (
        <StyledNewsfeed>
            <h2>{title}</h2>
            <span>
                {messageDate}
                {' | '}
            </span>
            <span>
                {tag}
                {' | '}
            </span>
            {filliates.map((filliate) => {
                let path = filliate.cityName.includes(' ')
                    ? filliate.cityName.replace(' ', '-').toLowerCase()
                    : filliate.cityName.toLowerCase();
                return (
                    <Link key={filliate.originalId} to={`/${path}/`}>
                        {filliate.cityName}
                        {' | '}
                    </Link>
                );
            })}
            <p>{message}</p>
            {imageForMessage ? (
                <StyledMediaWrapper>
                    <GatsbyImage
                        // @ts-ignore
                        image={getImage(imageForMessage.gatsbyImageData)}
                        alt={imageForMessage.alt}
                    />
                    <p>
                        <span>Komentarz:</span>
                        {imageDescription}
                    </p>
                </StyledMediaWrapper>
            ) : null}
            {videoForMessage ? (
                <StyledMediaWrapper>
                    <Video
                        url={videoForMessage.url}
                        title={videoForMessage.title}
                    />
                    <p>
                        <span>Komentarz:</span>
                        {videoDescription}
                    </p>
                </StyledMediaWrapper>
            ) : null}
        </StyledNewsfeed>
    );
};

export default memo(Newsfeed);
