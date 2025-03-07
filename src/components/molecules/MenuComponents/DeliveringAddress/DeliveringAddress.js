import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StyledDeliveringAddress } from './DeliveringAddress.styles';
import Heading from '../../../atoms/Headings/Heading';
import InfoBadge from '../../../atoms/InfoBadge/InfoBadge';

const DeliveringAddress = () => {
    const {
        datoCmsDeliveringAddress: { title, validDate, date, address },
    } = useStaticQuery(graphql`
        query deliverinAddressQuery {
            datoCmsDeliveringAddress {
                title
                validDate
                date(formatString: "DD-MM-YYYY", locale: "PL-pl")
                address
            }
        }
    `);

    return (
        <StyledDeliveringAddress>
            <Heading type="h2" title={title} />
            <InfoBadge text={validDate} date={date} url="/" label="Start" />
            <p>{address}</p>
        </StyledDeliveringAddress>
    );
};

export default DeliveringAddress;
