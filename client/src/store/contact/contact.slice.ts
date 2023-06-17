import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {IContact, IContactSearch} from "./contact.interface";

export interface IContactSlice {
    list: IContact[];
    loading: boolean;
}

const initialState: IContactSlice = {
    list: [],
    loading: false,
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState: initialState,
    reducers: {
        set (state: Draft<IContactSlice>, action: PayloadAction<IContact[]>) {
            state.list = action.payload;
        },
        add (state: Draft<IContactSlice>, action: PayloadAction<IContact[]>) {
            state.list = state.list.concat(action.payload);
        },
        update (state: Draft<IContactSlice>, action: PayloadAction<{ filter: IContactSearch, data: IContact }>) {
            for (let i: number = 0; i < state.list.length; i++) {
                const item: IContact = state.list[i];
                if (
                    item.email === action.payload.filter.email &&
                    item.number === action.payload.filter.number
                ) {
                    state.list[i] = {...item, ...action.payload.data};
                    break;
                }
            }
        },
        remove (state: Draft<IContactSlice>, action: PayloadAction<IContact>) {
            for (let i: number = 0; i < state.list.length; i++) {
                const item: IContact = state.list[i];
                if (
                    item.email === action.payload.email &&
                    item.number === action.payload.number
                ) {
                    state.list.splice(i, 1);
                    break;
                }
            }
        },
        loading (state: Draft<IContactSlice>, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        }
    }
})