import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StyledDeliveringAddress } from './DeliveringAddress.styles';

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
            <h3>{title}</h3>
            <div>
                <span>{validDate}</span> <span>{date}</span>
                {' | '}
                <Link to="/">Start</Link>
            </div>
            <p>{address}</p>
        </StyledDeliveringAddress>
    );
};

export default DeliveringAddress;
