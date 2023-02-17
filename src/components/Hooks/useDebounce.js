import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [useDebounce, setDebounce] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounce(value), delay);

        return () => clearTimeout(handler);
        // eslint-disable-next-line
    }, [value]);
    return useDebounce;
}

export default useDebounce;
