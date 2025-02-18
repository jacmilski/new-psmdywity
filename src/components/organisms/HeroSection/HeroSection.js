import React from 'react';
import {
    GatsbyImageWrapper,
    StyledHeroHeading,
    StyledHeroSection,
} from './HeroSection.styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const HeroSection = ({ title, image, alt }) => {
    return (
        <StyledHeroSection>
            <StyledHeroHeading>{title}</StyledHeroHeading>
            <GatsbyImageWrapper>
                <GatsbyImage
                    alt={alt}
                    // @ts-ignore
                    image={getImage(image)}
                />
            </GatsbyImageWrapper>
        </StyledHeroSection>
    );
};

export default HeroSection;
