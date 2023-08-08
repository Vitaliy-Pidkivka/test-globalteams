import { ABOUT, ACCOUNT, HOME, LAUNCHPAD } from "constants/routes"
import React from "react"
import NavLink from "shared/components/NavLink"

const navigationLinks = [
  {
    label: "Home",
    path: HOME,
  },
  {
    label: "About",
    path: ABOUT,
  },
  {
    label: "Launchpad",
    path: LAUNCHPAD,
  },
  {
    label: "Account",
    path: ACCOUNT,
  },
]

const Menu = () => {
  return (
    <div>
      {navigationLinks.map(({ path, label }) => (
        <NavLink
          sx={{
            fontWeight: 500,
            ":not(:last-child)": {
              marginRight: "60px",
            },
          }}
          key={path}
          to={path}
        >
          {label}
        </NavLink>
      ))}
    </div>
  )
}

export default Menu
