import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IContact, IContactSearch} from "./contact.interface";
import {API_CONTACT} from "../../constants/urls.constants";

export const contactApi = createApi({
    reducerPath: 'contact/api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_CONTACT,
        credentials: 'include'
    }),
    endpoints: (build) => ({
        create: build.query<boolean, IContact>({
            query: (props) => ({
                url: '',
                method: 'post',
                body: props,
            })
        }),
        findMany: build.query<IContact[], IContactSearch>({
            query: (props) => ({
                url: '',
                method: 'get',
                params: props,
            })
        }),
        update: build.query<boolean, { filter: IContactSearch, body: IContact }>({
            query: (props) => ({
                url: '',
                method: 'patch',
                params: props.filter,
                body: props.body
            })
        }),
        delete: build.query<boolean, IContactSearch>({
            query: (filter) => ({
                url: '',
                method: 'delete',
                params: filter,
            })
        }),
    })
})