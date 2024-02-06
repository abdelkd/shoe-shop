import { RootState, AppDispatch } from "@/services/state/store";
import {
  useDispatch,
  UseDispatch,
  TypedUseSelectorHook,
  useSelector,
} from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: UseDispatch<AppDispatch> = useDispatch;
