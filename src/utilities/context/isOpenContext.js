import { createContext } from 'react';

const IsOpenContext = createContext({
    isOpen: false,
    setIsOpen: () => {},
});

export default IsOpenContext;
