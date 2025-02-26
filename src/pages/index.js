import * as React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/atoms/Seo/Seo';
import HeroSection from '../components/organisms/HeroSection/HeroSection';
import AsideMenu from '../components/organisms/AsideMenu/AsideMenu';

const IndexPage = ({ data }) => {
    const {
        datoCmsSekcjaHero: {
            titleOfHeroImage,
            heroImage: { gatsbyImageData, alt },
        },
    } = data;

    return (
        <main>
            <HeroSection
                title={titleOfHeroImage}
                image={gatsbyImageData}
                alt={alt}
            />
            <AsideMenu />
        </main>
    );
};

export default IndexPage;

export const Head = () => <Seo pathname="/" />;

export const query = graphql`
    query HomePageQuery {
        datoCmsSekcjaHero {
            heroImage {
                gatsbyImageData
                alt
            }
            titleOfHeroImage
        }
    }
`;
