import { configureStore } from "@reduxjs/toolkit";
import { educationReducer } from "../reducers/education/educationSlice";
import { skillsReducer } from "../reducers/skills/skillsSlice";

export const store = configureStore({
    reducer: {
        educationReducer,
        skillsReducer,
    }
})