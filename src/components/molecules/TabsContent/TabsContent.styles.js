import styled from 'styled-components';
import { Tabs } from 'radix-ui';

export const StyledTabsContent = styled(Tabs.Content)`
    border: 1px inset #cba726;
    border-radius: 0 7px 7px 7px;
`;

export const StyledTabsInnerContent = styled.div`
    width: 100%;
    padding: 20px;

    & .subtitle {
        font-size: calc(var(--font-16) + 1px);
        font-weight: 700;
        margin-bottom: 10px;
    }
`;
