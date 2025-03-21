import React from 'react';
import {
    StyledContentWrapper,
    StyledGalleryItem,
    StyledGalleryWrapper,
    StyledInstrumentsWrapper,
} from './Instruments.styles';
import TitleBanner from '../../../../TitleBanner/TitleBanner';
import Heading from '../../../../../atoms/Headings/Heading';
import Aside from '../../../../../organisms/Aside/Aside';
import DateBadge from '../../../../../atoms/DateBadge/DateBadge';
import { Link } from 'gatsby';
import Gallery from '../../../../../organisms/Gallery/Gallery';

const Instruments = () => {
    return (
        <StyledInstrumentsWrapper>
            <TitleBanner title={'Poznaj instrumenty, na których uczymy'} />
            <StyledContentWrapper>
                <Aside gallery={true} filliate={undefined} />
                <StyledGalleryWrapper>
                    <Heading
                        type={`h2`}
                        title={'Instrumenty'}
                        teachers={undefined}
                    />

                    {['A', 'B', 'C'].map((poster, index) => {
                        const data = poster;
                        return (
                            <StyledGalleryItem key={index}>
                                <div className="date-and-links">
                                    <span>Aktualizacja: </span>
                                    <DateBadge date={'20-03-2023'} />
                                    <Link to={`/Dyplomy`}>Afisze |</Link>
                                    <Link to={`/artykuly`}>Artykuły</Link>
                                </div>
                                {data.length !== 0 ? (
                                    <p>{poster}</p>
                                ) : (
                                    <p
                                        style={{
                                            color: 'red',
                                            textAlign: 'center',
                                            width: '100%',
                                            display: 'block',
                                        }}
                                    >
                                        Brak materiałów do wyświetlenia...
                                    </p>
                                )}
                            </StyledGalleryItem>
                        );
                    })}
                </StyledGalleryWrapper>
            </StyledContentWrapper>
        </StyledInstrumentsWrapper>
    );
};

export default Instruments;
