import { Box } from "@mui/material"
import Menu from "./Menu"
import User from "./User"
import NavLink from "shared/components/NavLink"
import { HOME } from "constants/routes"
import { ReactComponent as Logo } from "assets/icons/logo.svg"

const Header = () => {
  return (
    <Box
      sx={({ palette }) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 140px",
        background: palette.primary.light,
        color: palette.white.main,
      })}
    >
      <NavLink activeDisable to={HOME}>
        <Logo style={{ flexShrink: 0, marginRight: "5px" }} />
      </NavLink>
      <Menu />
      <User />
    </Box>
  )
}

export default Header
