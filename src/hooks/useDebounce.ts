import {useEffect, useState } from "react";

export const useDebounce = <T>(val: T, delay: number) => {
    const [value, setValue] = useState(val);

    useEffect(() => {
        const handler = setTimeout(() => {
            setValue(val);
        }, delay);

        return () => clearTimeout(handler);
    }, [val]);

    return value;
};
