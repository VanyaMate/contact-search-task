import {RootState} from "../../store/index.store";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const useSlice: TypedUseSelectorHook<RootState> = useSelector;