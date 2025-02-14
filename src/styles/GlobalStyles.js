import { createGlobalStyle } from 'styled-components';
import './fonts.css';
import './normalize.css';

const GlobalStyles = createGlobalStyle`
    html {
        --white: #fff;
        --black: #000;
        --orange: #EDAA52;
        --red: #E94F37;
        --light-gray: #F6F7EB;
        --gray: #D9D9D9;
        --dark-gray: #363535;
        --green: #34DA31;
        --cream: #F8ECEC;

        // new colors -1
        --light-gray-1: #F9F5EB;
        --gray-1: #E4DCCF;
        --red-1: #EA5455;
        --dark-navy-1: #002B5B;
        // new colors -2
        --green-2: #219C90;
        --yellow-2: #E9B824;
        --orange-2: #EE9322;
        --red-2: #D83F31;
        // new colors -3
        --gray-3: #F5F7F8;
        --yellow-3: #F4CE14;
        --sage-3: #495E57;
        --black-3: #45474B;
        // new colors -4
        --green-4: #808836;
        --yellow-4: #FFBF00;
        --orange-4: #FF9A00;
        --maroon-4: #D10363;
        --gray-4: #434343;
        --light-gray-4: #F5F5F5;

        // fonts sizes
        --font-16: 16px;
        --font-18: 18px;
        --font-20: 20px;
        --font-24: 24px;
        --font-28: 28px;
        --font-32: 32px;
        --font-36: 36px;
        --font-40: 40px;
        --font-44: 44px;
        --font-48: 48px;
    }

    * {
        font-family: 'Lora', sans-serif;
    }
`;

export default GlobalStyles;
