import {RootState} from "../../store/index.store";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const useStore: TypedUseSelectorHook<RootState> = useSelector;