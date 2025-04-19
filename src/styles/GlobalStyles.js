import { createGlobalStyle } from 'styled-components';
import './fonts.css';
import './normalize.css';

const GlobalStyles = createGlobalStyle`
    html {
        --white: #fff; ////
        --black: #000;////
        --black-3: #45474B;////
        --yellow-2: #E9B824; ////
        --yellow-3: #F4CE14; ////
        --green-2: #219C90;/////
        --green-4: #808836;////
        --sage-3: #495E57;/////
        --red-2: #D83F31; ////
        --maroon-4: #D10363; ////
        --gray: #D9D9D9; ////
        --gray-3: #F5F7F8; ////
        --gray-4: #434343; ////
        --light-gray-4: #F5F5F5; ////
        --gray-mute: #8e8e8e;////

        // #cba726 - accordion border bottom, teaching method border, Tabs
        // #eac953 - accordion chevron
        // lightgray - aside border right
        // #f4ce14 - AsideMenu - gradient

        // fonts sizes
        --font-16: 16px;
        --font-18: 18px;
        --font-20: 20px;
        --font-22: 22px;
        --font-24: 24px;
        --font-26: 26px;
        --font-28: 28px;
        --font-30: 30px;
        --font-32: 32px;
        --font-34: 34px;
        --font-36: 36px;
        --font-38: 38px;
        --font-40: 40px;
        --font-42: 42px;
        --font-44: 44px;
        --font-46: 46px;
        --font-48: 48px;
    }

    * {
        font-family: 'Lora', sans-serif;
    }

    body {
            .p-galleria-mask
            .p-galleria-fullscreen
            .p-galleria-close
            .p-galleria-close-icon path,
            .p-galleria-item-prev .p-galleria-item-prev-icon path,
            .p-galleria-item-next .p-galleria-item-next-icon path {
            fill: #393939;
            cursor: pointer;
        }
    }
`;

export default GlobalStyles;
