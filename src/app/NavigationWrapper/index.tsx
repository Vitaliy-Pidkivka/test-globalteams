import { Outlet } from "react-router-dom"
import Header from "./Header"
import { Box } from "@mui/material"

const MavigationWrapper = () => {
  return (
    <Box
      sx={({ palette }) => ({
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: palette.lightblue.light,
      })}
    >
      <Header />
      <Box sx={{ flexGrow: 1, height: "calc(100vh - 140px)" }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default MavigationWrapper
