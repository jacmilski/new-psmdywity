import { NavigationMenu } from 'radix-ui';
import styled from 'styled-components';

export const StyledAsideMenuWrapper = styled.div`
    display: ${({
        // @ts-ignore
        $isOpen,
        // @ts-ignore
        $widthOfWindow,
    }) => ($isOpen && $widthOfWindow < 768 ? 'flex' : 'none')};
    //background-color: var(--yellow-3);
    background-image: linear-gradient(45deg, #f4ce14 30%, var(--green-2));
    width: 100%;
    padding: ${({
        // @ts-ignore
        $isOpen,
        // @ts-ignore
        $widthOfWindow,
    }) => ($isOpen && $widthOfWindow < 768 ? '20px' : 'unset')};
    min-width: ${({
        // @ts-ignore
        $gallery,
    }) => ($gallery ? '198px' : '170px')};
    z-index: 1000;

    @media only screen and (min-width: 768px) {
        display: block;
        padding: ${({
            // @ts-ignore
            $filliate,
        }) => ($filliate ? '30px 15px' : '30px 10px')};
        max-width: ${({
            // @ts-ignore
            $gallery,
        }) => ($gallery ? '250px' : null)};

        & .gatsby-image-wrapper {
            display: none;
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

/* //#f4ce14, #e9b824 */
