import styled from 'styled-components';
import {
    schoolStuffContentStyles,
    titleBannerStyles,
} from '../../../../../../styles/sharedStyles';
import { Tabs } from 'radix-ui';

export const StyledTeachingMethodsWrapper = styled.section`
    ${titleBannerStyles};
`;

export const StyledContentWrapper = styled.div`
    ${schoolStuffContentStyles};

    justify-content: center;
    align-items: flex-start;
    gap: 20px;
`;

export const StyledTeachingMethodsContent = styled.div`
    width: 100%;
    padding: 20px;

    & .subtitle {
        font-size: calc(var(--font-16) + 1px);
        font-weight: 700;
        margin-bottom: 10px;
    }
`;

/* Tabs Styles */
export const StyledTabsRoot = styled(Tabs.Root)`
    margin-top: 40px;
`;

export const StyledTabsList = styled(Tabs.List)`
    [data-state='active'] {
        border: 1px solid #cba726;
        border-bottom: none;
        color: var(--yellow-4);
    }
`;

export const StyledTabsTrigger = styled(Tabs.Trigger)`
    background-color: var(--sage-3);
    color: var(--yellow-3);
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        color: var(--yellow-4);
    }

    &:first-child {
        border-radius: 7px 0 0 0;
        border-right: 1px solid var(--gray-mute);
    }

    &:last-child {
        border-radius: 0 7px 0 0;
        border-left: 1px solid var(--gray-mute);
    }
`;

export const StyledTabsContent = styled(Tabs.Content)`
    border: 1px inset #cba726;
    border-radius: 0 7px 7px 7px;
`;
