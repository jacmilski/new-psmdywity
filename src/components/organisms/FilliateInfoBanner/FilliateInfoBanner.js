import React, { memo } from 'react';
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
                className="background"
            />
            <StyledFilliateTitle>{schoolName}</StyledFilliateTitle>
            <StyledFilliateContent>
                <StyledFilliateData>
                    <StyledFilliateInfo>
                        <p>
                            <span>Adres: ul.</span> <span>{street}</span>
                            {', '}
                        </p>
                        <p>
                            <span>{postcode}</span> <span>{cityName} </span>
                        </p>
                        <p>
                            <span>tel.</span> <span>{telephone}</span>
                        </p>
                        <p>
                            <span>E-mail:</span> <span>{email}</span>
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

export default memo(FilliateInfoBanner);
