import { NavigationMenu } from 'radix-ui';
import styled from 'styled-components';

export const StyledAsideMenuWrapper = styled.div`
    display: none;
    background-color: var(--yellow-3);
    position: stcky;
    top: 450px;
    left: 90px;
    width: 100%;
    min-width: 170px;
    z-index: 1000;

    @media only screen and (min-width: 768px) {
        display: block;
        padding: 30px;

        & .gatsby-image-wrapper {
            position: absolute;
            top: 15%;
            right: 50%;
            width: 90px;
            max-width: unset;
            z-index: 10001;

            & div {
                max-width: 150px !important;
            }

            &.note-2 {
                top: 25%;
                right: 30%;
            }

            &.note-3 {
                top: 36%;
                right: 9%;
            }
        }
    }

    @media only screen and (min-width: 992px) {
        display: block;
        padding: 10px;

        & .gatsby-image-wrapper {
            display: none;
        }
    }
`;

export const StyledAsideMenu = styled.nav``;

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
export const StyledNavigationMenuContent = styled(NavigationMenu.Content)``;

export const StyledNavigationMenuSub = styled(NavigationMenu.Sub)`
    margin-left: 15px;
`;
