import { Link } from 'gatsby';
import React, { memo } from 'react';
import { StyledInfoBadge } from './InfoBadge.styles';
import DateBadge from '../DateBadge/DateBadge';

const InfoBadge = ({ text, date, url, label }) => {
    return (
        <StyledInfoBadge>
            <span>{text}</span> <DateBadge date={date} />
            <Link to={url}>{label}</Link>
        </StyledInfoBadge>
    );
};

export default memo(InfoBadge);
