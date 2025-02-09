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
    }

    * {
        font-family: 'Lora', sans-serif;
    }
`;

export default GlobalStyles;
