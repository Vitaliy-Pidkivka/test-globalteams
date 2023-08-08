import { Box } from "@mui/material"
import Navbar from "./NavBar"

const Home = () => {
  return (
    <Box
      sx={({ palette }) => ({
        height: "calc(100% - 40px)",
        flexGrow: 1,
        padding: "20px",
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "240px auto",
        color: palette.primary.main,
        // gridTemplateRows: "100%",
      })}
    >
      <Navbar />
    </Box>
  )
}

export default Home
