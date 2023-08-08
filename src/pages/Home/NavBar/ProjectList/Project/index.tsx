import { Button } from "@mui/material"
import { HTMLAttributes } from "react"

type Props = {
  isActive?: boolean
} & HTMLAttributes<HTMLButtonElement>

const Project = ({ isActive, children, onClick }: Props) => {
  return (
    <Button
      sx={{
        padding: 0,
        opacity: 0.6,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        ...(isActive && { fontWeight: 600, opacity: 1 }),
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default Project
