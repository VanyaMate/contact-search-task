import {useMemo, useState} from "react";

export enum QueryType {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
}

export interface IUseQueryOptions {
    method?: QueryType;
    cache?: string;
    queries?: [string, string][];
}

export const useQuery = function (url: string, options: IUseQueryOptions) {
    const [error, setError] = useState<boolean>(false);
    const [fetching, setFetching] = useState<boolean>(false);
    const [data, setData] = useState<any>();
    /**
     * Мемный получился хук
     */
    const xhr: XMLHttpRequest = useMemo(() => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4) {
                setFetching(false);
                setData(xhr.response);
            } else {
                setFetching(true);
                setError(false);
            }
        });

        xhr.addEventListener('error', () => {
            setError(true);
        })

        return xhr;
    }, [url])

    const queries = useMemo(() => {
        return options.queries?.length
            ? '?' + options.queries
                .filter(([_, value]) => !!value)
                .map(([key, value]) => `${ key }=${ value }`).join('&')
            : ''
    }, [options.queries])

    const queriesOptions = useMemo(() => {
        const queries: { [key: string]: string } = {};

        for (let i: number = 0; i < (options.queries?.length ?? 0); i++) {
            const [key, value] = options.queries![i];
            if (key && value) {
                queries[key] = value;
            }
        }

        return queries;
    }, [options.queries])

    return {
        xhr: xhr,
        send: (body?: any) => {
            xhr.abort();
            xhr.open(options.method ?? QueryType.GET, url + queries);
            xhr.setRequestHeader("Cache-Control", options.cache ?? 'no-cache');
            xhr.setRequestHeader("Content-Type", 'application/json;charset=UTF-8');
            xhr.send(body ? JSON.stringify(body) : '');
        },
        error,
        fetching,
        data,
        queries: queriesOptions,
    }
}