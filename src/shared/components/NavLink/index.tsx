import { styled } from "@mui/material"
import { NavLink as RouterNavLink } from "react-router-dom"
import { shouldForwardProp } from "styles/helpers"

type Props = {
  activeDisable?: boolean
}
const NavLink = styled(RouterNavLink, {
  shouldForwardProp: (prop) => shouldForwardProp<Props>(["activeDisable"], prop),
})<Props>(({ theme: { palette }, activeDisable }) => ({
  fontSize: "18px",
  lineHeight: 1,
  color: palette.white.main,
  textDecoration: "none",
  transition: "all .3s ease-in-out",
  "&.active": {
    ...(!activeDisable && { color: palette.warning.main }),
  },
  "&:hover": {
    color: palette.warning.main,
  },
}))

export default NavLink
