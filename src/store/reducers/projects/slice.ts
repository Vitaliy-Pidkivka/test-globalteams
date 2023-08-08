import { createSlice } from "@reduxjs/toolkit"

export const INITIAL_STATE = {} as const

const sliceName = "projects"

const { actions, reducer } = createSlice({
  name: sliceName,
  initialState: INITIAL_STATE,
  reducers: {},
})

export { actions as ProjectsActions, reducer }
