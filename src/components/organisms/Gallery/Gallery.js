import React, { useState, useEffect, useRef, memo } from 'react';
import { Galleria } from 'primereact/galleria';
import {
    StyledGalleriaWrapper,
    StyledGalleriaDiv,
    StyledGalleriaGrid,
    StyledGalleriaCard,
} from './Gallery.styles';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import Heading from '../../atoms/Headings/Heading';

const Gallery = ({ data, title, subtitle, teachers, achievements }) => {
    const [images, setImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const galleria = useRef(null);

    useEffect(() => {
        setImages(data);
    }, [data]);

    const itemTemplate = (item) => {
        return (
            <img
                src={item.gatsbyImageData.images.fallback.src}
                alt={item.alt}
                style={{ width: '200%', display: 'block' }}
            />
        );
    };

    const thumbnailTemplate = (item) => {
        return (
            <img
                src={item.gatsbyImageData.images.fallback.src}
                alt={item.alt}
                style={{ display: 'block', width: '100px' }}
            />
        );
    };

    return (
        <>
            <StyledGalleriaWrapper
                // @ts-ignore
                $teachers={teachers}
            >
                <StyledGalleriaDiv
                    // @ts-ignore
                    $teachers={teachers}
                >
                    {title ? (
                        <Heading
                            type={teachers ? 'h2' : 'h1'}
                            title={title}
                            // @ts-ignore
                            teachers={teachers}
                        />
                    ) : null}
                    {subtitle ? (
                        <Heading
                            type={teachers ? 'h3' : 'h2'}
                            title={subtitle}
                            teachers={undefined}
                        />
                    ) : null}
                    <Galleria
                        ref={galleria}
                        value={images}
                        numVisible={7}
                        style={{ maxWidth: '850px' }}
                        activeIndex={activeIndex}
                        onItemChange={(e) => {
                            setActiveIndex(e.index);
                        }}
                        circular
                        fullScreen
                        showItemNavigators
                        showThumbnails={false}
                        item={itemTemplate}
                        thumbnail={thumbnailTemplate}
                        //autoPlay
                        //transitionInterval={2000}
                    />

                    <StyledGalleriaGrid className="grid">
                        {images &&
                            // @ts-ignore
                            images.map((image, index) => {
                                // @ts-ignore
                                const imgEl = (
                                    <img
                                        src={
                                            // @ts-ignore
                                            image.gatsbyImageData.images
                                                .fallback.src
                                        }
                                        // @ts-ignore
                                        alt={image.alt}
                                        style={{
                                            width: '100%',
                                            maxWidth: '200px',
                                            aspectRatio: 'auto',
                                            cursor: 'pointer',
                                            display: 'inline-block',
                                        }}
                                        onClick={() => {
                                            setActiveIndex(index);
                                            itemTemplate(
                                                // @ts-ignore
                                                image
                                            );
                                            thumbnailTemplate(
                                                // @ts-ignore
                                                image
                                            );
                                            // @ts-ignore
                                            galleria.current.show();
                                        }}
                                    />
                                );
                                return (
                                    <figure>
                                        <StyledGalleriaCard
                                            className="col-3"
                                            // @ts-ignore
                                            key={
                                                // @ts-ignore
                                                String(
                                                    (new Date().getUTCMilliseconds() +
                                                        index) /
                                                        new Date().getUTCMilliseconds()
                                                    // @ts-ignore
                                                ) + image.originalId
                                            }
                                            style={{
                                                width: '100%',
                                                display: ' flex',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {imgEl}
                                            {!achievements ? (
                                                <figcaption>
                                                    {
                                                        // @ts-ignore
                                                        image.title
                                                    }
                                                </figcaption>
                                            ) : null}
                                        </StyledGalleriaCard>
                                    </figure>
                                );
                            })}
                    </StyledGalleriaGrid>
                </StyledGalleriaDiv>
            </StyledGalleriaWrapper>
        </>
    );
};

export default memo(Gallery);
