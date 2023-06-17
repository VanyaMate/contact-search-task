import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IContact, IContactSearch} from "./contact.interface";
import {API_CONTACT} from "../../constants/urls.constants";

export const contactApi = createApi({
    reducerPath: 'contact/api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_CONTACT
    }),
    endpoints: (build) => ({
        create: build.query<boolean, IContact>({
            query: (props) => ({
                url: 'create',
                method: 'post',
                body: props,
            })
        }),
        update: build.query<boolean, { filter: IContactSearch, body: IContact }>({
            query: (props) => ({
                url: 'update',
                method: 'put',
                params: props.filter,
                body: props.body
            })
        }),
        delete: build.query<boolean, IContactSearch>({
            query: (filter) => ({
                url: 'delete',
                method: 'delete',
                params: filter,
            })
        }),
    })
})