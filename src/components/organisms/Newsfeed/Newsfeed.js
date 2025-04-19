import React, { useState, useEffect, memo } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
    StyledNewsfeed,
    StyledMediaWrapper,
    StyledContentWrapper,
} from './Newsfeed.styles';
import { Link } from 'gatsby';
import Video from '../../atoms/Video/Video';

const Newsfeed = ({ data }) => {
    const [visible, setVisible] = useState(false);
    const [visibleInner, setVisibleInner] = useState(false);

    const handleVisible = (e) => {
        e.preventDefault();
        if (visible) {
            setTimeout(() => {
                setVisible(!visible);
            }, 900);
        } else setVisible(true);
        setTimeout(() => {
            setVisibleInner(!visibleInner);
        }, 150);
    };

    useEffect(() => {}, [visible, setVisibleInner]);

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

            <button
                type="submit"
                onClick={handleVisible}
                className="btn-show-more"
            >
                {visible ? 'Ukryj' : 'Pokaż więcej...'}
            </button>

            {visible ? (
                <div>
                    {visible ? (
                        <StyledContentWrapper
                            // @ts-ignore
                            $visible={visibleInner}
                        >
                            <p style={{ display: 'block' }}>{message}</p>
                            {imageForMessage ? (
                                <StyledMediaWrapper>
                                    <GatsbyImage
                                        // @ts-ignore
                                        image={getImage(
                                            imageForMessage.gatsbyImageData
                                        )}
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
                                        key={undefined}
                                    />
                                    <p>
                                        <span>Komentarz:</span>
                                        {videoDescription}
                                    </p>
                                </StyledMediaWrapper>
                            ) : null}
                        </StyledContentWrapper>
                    ) : null}
                </div>
            ) : null}
        </StyledNewsfeed>
    );
};

export default memo(Newsfeed);
