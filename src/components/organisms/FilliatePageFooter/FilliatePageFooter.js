import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Heading from '../../atoms/Headings/Heading';
import {
    FilliatePageFooterWrapper,
    LeftColumnContent,
    LeftColumnWrapper,
    RightColumnContent,
    RightColumnWrapper,
} from './FilliatePageFooter.styles';

const FilliatePageFooter = ({ data, address }) => {
    return (
        <FilliatePageFooterWrapper>
            <LeftColumnWrapper>
                {data.filliateFooterList.map((element) => (
                    <LeftColumnContent key={element.originalId}>
                        <Heading
                            type={'h3'}
                            title={element.title}
                            teachers={undefined}
                        />
                        <div className="content">
                            {ReactHtmlParser(element.content)}
                        </div>
                    </LeftColumnContent>
                ))}
            </LeftColumnWrapper>

            <RightColumnWrapper>
                <Heading type={'h3'} title={'Kontakt'} teachers={undefined} />
                <RightColumnContent>
                    <p className="school-name">{address.schoolName}</p>
                    <p>
                        <span>
                            <strong>Adres: </strong>
                            ul.
                        </span>{' '}
                        <span>{address.street}</span>
                        {', '}
                    </p>
                    <p>
                        <span>{address.postcode}</span>{' '}
                        <span>{address.cityName} </span>
                    </p>
                    <p>
                        <span>
                            <strong>Tel.</strong>
                        </span>{' '}
                        <span>{address.telephone}</span>
                    </p>
                    <p>
                        <span>
                            <strong>E-mail:</strong>
                        </span>{' '}
                        <span>{address.email}</span>
                    </p>
                    <div className="content">
                        {ReactHtmlParser(data.officeWorkingHours)}
                    </div>
                    <Heading
                        type={'h3'}
                        title={'Lokalizacja szkoły'}
                        teachers={undefined}
                    />
                    <div className="location">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=20.47737300395966%2C53.835331504631%2C20.479773581027988%2C53.836382465891674&amp;layer=mapnik&amp;marker=53.83585710093736%2C20.478574550000076"
                            style={{ border: '1px solid black' }}
                        ></iframe>
                    </div>
                    <br />
                    <small>
                        <a href="https://www.openstreetmap.org/?mlat=53.835857&amp;mlon=20.478575#map=19/53.835857/20.478575">
                            Wyświetl większą mapę
                        </a>
                    </small>
                </RightColumnContent>
            </RightColumnWrapper>
        </FilliatePageFooterWrapper>
    );
};

export default FilliatePageFooter;
