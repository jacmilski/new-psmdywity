import * as React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/atoms/Seo/Seo';
import HeroSection from '../components/organisms/HeroSection/HeroSection';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';

const IndexPage = ({ data }) => {
    const {
        datoCmsSekcjaHero: {
            titleOfHeroImage,
            heroImage: { gatsbyImageData, alt },
        },
    } = data;

    return (
        <PrimeReactProvider>
            <main style={{ position: 'relative' }}>
                <HeroSection
                    title={titleOfHeroImage}
                    image={gatsbyImageData}
                    alt={alt}
                />
            </main>
        </PrimeReactProvider>
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
