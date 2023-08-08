import { Box, Divider, Typography } from "@mui/material"
import Projects from "./ProjectList"

const Navbar = () => {
  return (
    <Box
      sx={({ palette, spacing }) => ({
        boxShadow: `0px 0px 10px 0px ${palette.lightblue.main}`,
        padding: `${spacing(11)} ${spacing(6)}`,
        borderRadius: "7px",
        background: palette.white.main,
        overflowY: "auto",
      })}
    >
      <Typography variant="h5" lineHeight={1} marginBottom="14px" letterSpacing="2%">
        My Profile
      </Typography>
      <Typography variant="h2" marginBottom="60px" letterSpacing="2%" color="primary.dark">
        Anderson Swift
      </Typography>
      <Divider color="lightblue.dark" sx={{ opacity: 0.5 }} />
      <Projects />
    </Box>
  )
}

export default Navbar
