import { createSelector } from "@reduxjs/toolkit"
import { RootState } from "store"

export const getWeatherReducer = (state: RootState) => state.projects
