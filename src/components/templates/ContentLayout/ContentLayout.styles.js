import styled from 'styled-components';

export const StyledContentLayout = styled.div`
    width: 100%;
    margin: 0 auto;

    @media only screen and (min-width: 768px) {
        display: flex;
        flex-direction: ${({
            // @ts-ignore
            $footer,
        }) => ($footer ? 'column' : 'row')};
        width: 85%;
    }

    @media only screen and (min-width: 992px) {
        display: flex;
    }
`;
