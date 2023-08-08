import { useDispatch } from "react-redux"
import { bindActionCreators } from "@reduxjs/toolkit"
import { ProjectsActions } from "../store/reducers/projects"

export const useActions = () => {
  const dispatch = useDispatch()

  const ProjectsActs = bindActionCreators(ProjectsActions, dispatch)

  return {
    ProjectsActs,
  }
}
