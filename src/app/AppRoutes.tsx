import { lazy, Suspense } from "react"
import { Routes, Navigate, Route, BrowserRouter } from "react-router-dom"
import { Box, CircularProgress } from "@mui/material"
import NavigationWrapper from "./NavigationWrapper"
import { ABOUT, ACCOUNT, DEFAULT, HOME, LAUNCHPAD } from "../constants/routes"

const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const Launchpad = lazy(() => import("../pages/Launchpad"))
const Account = lazy(() => import("../pages/Account"))

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <Box sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress sx={{ width: "50px", height: "50px" }} />
        </Box>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path={DEFAULT} element={<NavigationWrapper />}>
            <Route index element={<Home />}></Route>
            <Route path={HOME} element={<Home />}></Route>
            <Route path={ABOUT} element={<About />}></Route>
            <Route path={LAUNCHPAD} element={<Launchpad />}></Route>
            <Route path={ACCOUNT} element={<Account />}></Route>
          </Route>
          <Route path="*" element={<Navigate to={DEFAULT} replace={true} />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default AppRoutes
