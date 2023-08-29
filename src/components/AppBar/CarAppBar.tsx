import { FC, useContext } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import LoginDialog from "./Login/LoginDialog";
import CarAppBarMenu from "./CarAppBarMenu";

import { CarsContext } from "../../context/cars-context";

const CarAppBar: FC = () => {
  const carsCtx = useContext(CarsContext);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          React Demo Cars
        </Typography>
        {carsCtx.loggedIn && <CarAppBarMenu />}
        {!carsCtx.loggedIn && <LoginDialog />}
      </Toolbar>
    </AppBar>
  );
};

export default CarAppBar;
