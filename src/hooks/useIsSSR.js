import { useEffect, useState } from 'react';

const useIsSSR = () => {
    const [isSSR, setIsSSR] = useState(true);

    // @ts-ignore
    useEffect(() => {
        setIsSSR(false);
    }, []);

    return isSSR;
};

export default useIsSSR;
