import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
    StyledFilliateContent,
    StyledFilliateData,
    StyledFilliateInfo,
    StyledFilliateInfoBanner,
    StyledFilliateLogo,
    StyledFilliateTitle,
} from './FilliateInfoBanner.styles';

const FilliateInfoBanner = ({ data }) => {
    const {
        schoolName,
        street,
        postcode,
        telephone,
        email,
        cityName,
        banner,
        logo,
    } = data;

    return (
        <StyledFilliateInfoBanner>
            <GatsbyImage
                // @ts-ignore
                image={getImage(banner.gatsbyImageData)}
                alt={banner.alt}
            />
            <StyledFilliateContent>
                <StyledFilliateTitle>{schoolName}</StyledFilliateTitle>
                <StyledFilliateData>
                    <StyledFilliateInfo>
                        <p>
                            <span>Adres: ul.</span> {street}
                            {', '}
                            <span>{postcode}</span> <span>{cityName}</span>
                        </p>
                        <p>
                            <span>tel.</span> {telephone}
                            {', '}
                            <span>E-mail:</span> {email}
                        </p>
                    </StyledFilliateInfo>
                    <StyledFilliateLogo>
                        <GatsbyImage
                            alt={logo.alt}
                            // @ts-ignore
                            image={getImage(logo.gatsbyImageData)}
                        />
                    </StyledFilliateLogo>
                </StyledFilliateData>
            </StyledFilliateContent>
        </StyledFilliateInfoBanner>
    );
};

export default FilliateInfoBanner;
