import { Avatar, Box, Typography } from "@mui/material"
import NavLink from "shared/components/NavLink"
import { ACCOUNT } from "constants/routes"
import { ReactComponent as Notifications } from "assets/icons/notification.svg"

const User = () => {
  return (
    <Box sx={{ display: "flex", flexShrink: 0, alignItems: "center" }}>
      <NavLink sx={{ marginRight: "50px" }} activeDisable to={ACCOUNT}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{
              marginRight: "10px",
            }}
          />
          <Typography variant="h4" sx={{ lineHeight: "20px" }}>
            <Typography component="span" sx={{ fontWeight: 700 }}>
              Hi
            </Typography>
            , Odelia Azoulay
          </Typography>
        </Box>
      </NavLink>
      {/* TODO: should be button in the future with popover */}
      <Notifications />
    </Box>
  )
}

export default User
