import React from 'react';
import {
    StyledHeading1,
    StyledHeading2,
    StyledHeading3,
} from './Headings.styles';

const Heading = ({ type, title }) => {
    switch (type) {
        case 'h1':
            // @ts-ignore
            return <StyledHeading1 $type={type}>{title}</StyledHeading1>;
        case 'h2':
            // @ts-ignore
            return <StyledHeading2 $type={type}>{title}</StyledHeading2>;
        default:
            // @ts-ignore
            return <StyledHeading3 $type={type}>{title}</StyledHeading3>;
    }
};

export default Heading;
