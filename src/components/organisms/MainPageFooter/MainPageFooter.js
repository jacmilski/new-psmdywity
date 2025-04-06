import React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
    StyledBottomWrapper,
    StyledMainPageFooter,
    StyledMiddleWrapper,
    StyledTopWrapper,
} from './MainPageFooter.styles';
import ReactHtmlParser from 'react-html-parser';
import ContentLayout from '../../templates/ContentLayout/ContentLayout';
import Heading from '../../atoms/Headings/Heading';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainPageFooter = ({ data }) => {
    const settings = {
        arrow: true,
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 9000,
        cssEase: 'linear',
        vertical: false,
        verticalSwiping: false,
    };

    return (
        <StyledMainPageFooter>
            <ContentLayout footer={true}>
                <StyledTopWrapper>
                    <div className="top-left-box top-boxes">
                        <GatsbyImage
                            // @ts-ignore
                            image={getImage(
                                data.upperFooterBlock.dywityLogo.gatsbyImageData
                            )}
                            alt={data.upperFooterBlock.dywityLogo.alt}
                        />
                    </div>
                    <div className="top-middle-box top-boxes">
                        <Heading
                            type={'h3'}
                            title={data.upperFooterBlock.heading}
                            teachers={undefined}
                        />
                        <div>
                            {ReactHtmlParser(
                                data.upperFooterBlock.upperFooterText
                            )}
                        </div>
                    </div>
                    <div className="top-right-box top-boxes">
                        <GatsbyImage
                            // @ts-ignore
                            image={getImage(
                                data.upperFooterBlock.handImage.gatsbyImageData
                            )}
                            alt={data.upperFooterBlock.handImage.alt}
                        />
                    </div>
                </StyledTopWrapper>
                <StyledMiddleWrapper>
                    {data.middleFooterList.map((element) => {
                        console.log(element);
                        return (
                            <div
                                className="middle-boxes"
                                key={element.originalId}
                            >
                                <div className="middle-boxes-image">
                                    <GatsbyImage
                                        alt={element.communityLogo.alt}
                                        image={
                                            element.communityLogo
                                                .gatsbyImageData
                                        }
                                    />
                                </div>
                                <div className="middle-boxes-text">
                                    <Heading
                                        type={'h3'}
                                        title={element.heading}
                                        teachers={undefined}
                                    />
                                    <div>
                                        {ReactHtmlParser(
                                            element.middleFooterText
                                        )}
                                        <Link
                                            to={
                                                element.heading
                                                    .toLowerCase()
                                                    .includes('olszt')
                                                    ? '/olsztynek/'
                                                    : element.heading
                                                          .toLowerCase()
                                                          .includes('dywit')
                                                    ? '/dywity/'
                                                    : element.heading
                                                          .toLowerCase()
                                                          .includes('bisku')
                                                    ? '/biskupiec/'
                                                    : element.heading
                                                          .toLowerCase()
                                                          .includes('barcz')
                                                    ? '/barczewo/'
                                                    : element.heading
                                                          .toLowerCase()
                                                          .includes('dobr')
                                                    ? '/dobre-miasto/'
                                                    : '/'
                                            }
                                            className="link"
                                        >
                                            Czytaj więcej
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </StyledMiddleWrapper>
            </ContentLayout>
            <StyledBottomWrapper>
                <div className="why-worth">
                    <Heading
                        type={'h2'}
                        title={data.bottomFooterBlock.headingWhy}
                        teachers={undefined}
                    />
                    <div className="why-worth-text">
                        {ReactHtmlParser(data.bottomFooterBlock.textWhy)}
                        <Link to="/dlaczego-warto/" className="link">
                            Czytaj więcej
                        </Link>
                    </div>
                </div>
                <div className="slider-wrapper">
                    <div className="slider-container">
                        <Heading
                            type={'h2'}
                            title={data.bottomFooterBlock.headingTeachers}
                            teachers={undefined}
                        />
                        <Slider {...settings} className="slider">
                            {data.bottomFooterBlock.teachersGallery.map(
                                (teacher) => (
                                    <div
                                        key={teacher.originalId}
                                        className="slider-image"
                                    >
                                        <GatsbyImage
                                            alt={teacher.alt}
                                            image={teacher.gatsbyImageData}
                                        />
                                        <p>{teacher.title}</p>
                                    </div>
                                )
                            )}
                        </Slider>
                    </div>
                </div>
            </StyledBottomWrapper>
        </StyledMainPageFooter>
    );
};

export default MainPageFooter;
