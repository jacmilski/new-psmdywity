import React from 'react';
import { StyledDateBadge } from './DateBadge.styles';

const DateBadge = ({ date }) => {
    return (
        <StyledDateBadge>
            {date}
            {' | '}
        </StyledDateBadge>
    );
};

export default DateBadge;
