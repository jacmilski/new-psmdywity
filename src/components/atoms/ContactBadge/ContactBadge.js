import React from 'react';
import { StyledContactBadge } from './ContactBadge.styles';

const ContactBadge = ({ data }) => {
    return (
        <StyledContactBadge>
            <p>
                Kontakt: <span>{data}</span>
            </p>
        </StyledContactBadge>
    );
};

export default ContactBadge;
