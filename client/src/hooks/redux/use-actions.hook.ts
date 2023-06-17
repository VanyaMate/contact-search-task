import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {contactSlice} from "../../store/contact/contact.slice";

export const useActions = function () {
    const dispatch = useDispatch();
    return {
        [contactSlice.name]: bindActionCreators(contactSlice.actions, dispatch),
    }
}