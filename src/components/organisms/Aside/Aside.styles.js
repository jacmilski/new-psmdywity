import styled from 'styled-components';

export const StyledAside = styled.aside`
    width: 100%;
    padding: 20px 10px;
    background-color: var(--gray-3);
    position: relative;
    display: none;

    @media only screen and (min-width: 768px) {
        width: auto;
        display: block;
        padding: 0;
        /* margin: ${({
            // @ts-ignore
            $filliate,
        }) => ($filliate ? '0 0' : '10px 0')}; */
        margin: 0;
    }

    @media only screen and (min-width: 992px) {
        width: 25%;
        margin: 0;
        border-bottom: 0;
        border-right: 1px solid lightgray;
    }
`;
