import {useMemo, useState} from "react";

export interface IUseInput<T> {
    value: T,
    valid: boolean,
    setValue: (v: T) => void
}

export const useInput = function<T> (defaultValue: T, validator?: (v: T) => boolean): IUseInput<T> {
    const [value, setValue] = useState<T>(defaultValue);
    const valid = useMemo<boolean>(() => {
        return validator ? validator(value) : true;
    }, [value])

    return { value, valid, setValue }
}