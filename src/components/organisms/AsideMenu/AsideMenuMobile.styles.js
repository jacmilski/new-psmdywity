import { NavigationMenu } from 'radix-ui';
import styled from 'styled-components';

export const StyledAsideMenuWrapper = styled.div`
    position: relative;
    display: flex;
    background-image: linear-gradient(45deg, #f4ce14 30%, var(--green-2));
    width: 100%;
    padding: 20px;
    min-width: 210px;
    z-index: 1002;
    border-radius: 10px;

    & img {
        display: block;
        position: absolute;
        top: 10px;
        left: -12px;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const StyledNavigationMenuRoot = styled(NavigationMenu.Root)``;

export const StyledNavigationMenuList = styled(NavigationMenu.List)``;

export const StyledNavigationMenuItem = styled(NavigationMenu.Item)`
    padding: 5px;
    border-bottom: 1px solid var(--green-2);
    border-bottom-left-radius: 6px;
    width: 100%;
    max-width: 190px;
`;
export const StyledNavigationMenuTrigger = styled(NavigationMenu.Trigger)`
    &.link {
        color: var(--black-3);
        font-weight: 700;
    }

    & a {
        text-decoration: none;
        color: var(--black-3);
        font-family: Lora, sans-serif;
        transition: all 0.3s ease;

        &:hover {
            color: var(--green-2);
            font-weight: 700;
        }
    }
`;
export const StyledNavigationMenuContent = styled(NavigationMenu.Content)`
    margin-left: 15px;
`;

export const StyledNavigationMenuSub = styled(NavigationMenu.Sub)`
    margin-left: 15px;
`;
