import {IContact, IContactSearch} from "../store/contact/contact.interface";
import {useActions} from "./redux/use-actions.hook";
import {useEffect, useState} from "react";
import {API_CONTACT} from "../constants/urls.constants";

export const useFindContacts = function (callback: (contacts: IContact[]) => void) {
    const [abort, setAbort] = useState<AbortController>(new AbortController());
    const [searchParams, setSearchParams] = useState<IContactSearch>();
    const {contact} = useActions();

    useEffect(() => {
        if (searchParams) {
            const abortController = new AbortController();
            setAbort(abortController);
            contact.loading(true);

            fetch(API_CONTACT + '?' + new URLSearchParams(searchParams as unknown as URLSearchParams), {
                method: 'get',
                credentials: 'include',
                signal: abort.signal,
            })
                .then((response) => response.json())
                .then((data) => callback(data ?? []))
                .then(() => contact.loading(false))
                .catch((reason) => {
                    // Ошибки можно посмотреть в reason.__proto__
                    // 20 код - это ABORT_ERR
                    if (reason.code !== 20) {
                        contact.loading(false)
                    }
                })

            return () => {
                abort.abort();
            }
        }
    }, [searchParams])

    return setSearchParams;
}