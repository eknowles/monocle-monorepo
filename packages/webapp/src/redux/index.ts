import { useDispatch } from "react-redux";
import { configStore } from "./configureStore";
import { rootReducer } from "./modules";

export const store = configStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export type RootState = ReturnType<typeof rootReducer>;
