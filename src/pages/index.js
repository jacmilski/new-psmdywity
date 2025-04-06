import * as React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/atoms/Seo/Seo';
import HeroSection from '../components/organisms/HeroSection/HeroSection';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import AsideMenu from '../components/organisms/AsideMenu/AsideMenu';
import MainPageFooter from '../components/organisms/MainPageFooter/MainPageFooter';

const IndexPage = ({ data }) => {
    const {
        datoCmsSekcjaHero: {
            titleOfHeroImage,
            heroImage: { gatsbyImageData, alt },
        },
    } = data;

    const {
        datoCmsMainPageFooter: {
            upperFooterBlock,
            middleFooterList,
            bottomFooterBlock,
        },
    } = data;

    const footerData = {
        upperFooterBlock,
        middleFooterList,
        bottomFooterBlock,
    };

    return (
        <PrimeReactProvider>
            <main>
                <HeroSection
                    title={titleOfHeroImage}
                    image={gatsbyImageData}
                    alt={alt}
                />
                <AsideMenu
                    gallery={undefined}
                    filliate={undefined}
                    isOpen={undefined}
                    widthOfWindow={undefined}
                />
                <MainPageFooter data={footerData} />
            </main>
        </PrimeReactProvider>
    );
};

export default IndexPage;

/* 
    <div>Obraz</div>
        {ReactHtmlParser('Treść')}
    <div>Obraz</div>
 */

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
        datoCmsMainPageFooter {
            upperFooterBlock {
                dywityLogo {
                    alt
                    title
                    gatsbyImageData
                }
                heading
                upperFooterText
                handImage {
                    alt
                    title
                    gatsbyImageData
                }
            }
            middleFooterList {
                heading
                middleFooterText
                originalId
                communityLogo {
                    alt
                    title
                    gatsbyImageData
                    originalId
                }
            }
            bottomFooterBlock {
                headingWhy
                headingTeachers
                textWhy
                teachersGallery {
                    alt
                    title
                    originalId
                    gatsbyImageData
                }
            }
        }
    }
`;
