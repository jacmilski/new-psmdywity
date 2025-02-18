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
        nazwaSzkoly,
        ulica,
        kodPocztowy,
        telefon,
        eMail,
        nazwaMiasta,
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
                <StyledFilliateTitle>{nazwaSzkoly}</StyledFilliateTitle>
                <StyledFilliateData>
                    <StyledFilliateInfo>
                        <p>
                            <span>Adres: ul.</span> {ulica}
                        </p>
                        <p>
                            <span>{kodPocztowy}</span>
                            {', '}
                            <span>{nazwaMiasta}</span>
                        </p>
                        <p>
                            <span>tel.</span> {telefon}
                        </p>
                        <p>
                            <span>E-mail:</span> {eMail}
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
