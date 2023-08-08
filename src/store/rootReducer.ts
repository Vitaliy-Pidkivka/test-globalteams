import { combineReducers } from "@reduxjs/toolkit"
//reducers
import { reducer as projects } from "./reducers/projects"

export default combineReducers({
  projects,
})
