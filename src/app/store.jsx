import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../feature/theme.slice";


export default configureStore({
    reducer: {
        theme: themeSlice,
    }
})