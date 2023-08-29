import { FC, useState, useContext } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Button, Menu, MenuItem, ListItemAvatar, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { CarsContext } from "../../context/cars-context";
import { StateType } from "../../types/StateType";
import { engineStep, appearanceStep, reviewStep } from "../../types/StepType";

import { displayActions } from "../../store/display-store";
import { formActions } from "../../store/form-store";

const CarAppBarMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const carsCtx = useContext(CarsContext);
  const dispatch = useDispatch();

  const currentFormStep = useSelector((state: StateType) => {
    return state.form.currentStep;
  });

  const showMyCar =
    currentFormStep.stepDesc === engineStep.stepDesc ||
    currentFormStep.stepDesc === appearanceStep.stepDesc ||
    currentFormStep.stepDesc === reviewStep.stepDesc;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const newCarHandler = () => {
    dispatch(formActions.clear());
    dispatch(displayActions.newCar());
    setAnchorEl(null);
  };

  const carsHandler = () => {
    dispatch(displayActions.cars());
    setAnchorEl(null);
  };

  const myCarHandler = () => {
    dispatch(displayActions.myCar());
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    carsCtx.logout();
    dispatch(displayActions.clearAll());
    setAnchorEl(null);
  };

  return (
    <>
      <Button id="appbar-button" onClick={handleClick} sx={{ my: 1, mx: 1.5 }}>
        Options
      </Button>
      <Menu
        id="appbar-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={newCarHandler}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          New Car
        </MenuItem>
        <MenuItem onClick={carsHandler}>
          <ListItemAvatar>
            <Avatar>
              <DirectionsCarIcon />
            </Avatar>
          </ListItemAvatar>
          Cars
        </MenuItem>
        {showMyCar && (
          <MenuItem onClick={myCarHandler}>
            <ListItemAvatar>
              <Avatar>
                <DirectionsCarFilledIcon />
              </Avatar>
            </ListItemAvatar>
            My Car
          </MenuItem>
        )}
        <MenuItem onClick={logoutHandler}>
          <ListItemAvatar>
            <Avatar>
              <ExitToAppIcon />
            </Avatar>
          </ListItemAvatar>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default CarAppBarMenu;
