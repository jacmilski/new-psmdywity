import { useEffect, useState } from 'react';

const useWindowWidth = (isSSR) => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (isSSR) return;
        window.addEventListener('resize', () => {
            setWindowWidth((prev) => window.innerWidth);
        });

        return () => {
            window.removeEventListener('resize', () => {
                setWindowWidth((prev) => window.innerWidth);
            });
        };
    }, [isSSR]);

    return windowWidth;
};

export default useWindowWidth;
