import { FC, useState, useContext } from "react";
import { useForm } from "react-hook-form";

import { ZodIssue } from "zod";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

import { validate } from "./LoginUtils/LoginUtils";
import { CarsContext } from "../../../context/cars-context";
import LoginDialogContent from "./LoginDialogContent";

const LoginDialog: FC = () => {
  const carsCtx = useContext(CarsContext);
  const { register, handleSubmit } = useForm();

  const [open, setOpen] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const processError = (issue: ZodIssue) => {
    const path = issue.path.length > 0 ? issue.path[0] : "";
    if (path === "emailAddress") {
      setEmailError("Please enter a valid email address");
    } else if (path === "password") {
      setPasswordError("Password needs to be at least 10 characters");
    }
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    clearErrors();
    setOpen(false);
  };

  const handleLogin = (formValues: any) => {
    if (validate(formValues, processError)) {
      carsCtx.login();
      setOpen(false);
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <form onSubmit={handleSubmit(handleLogin)}>
          <LoginDialogContent
            register={register}
            emailError={emailError}
            passwordError={passwordError}
          />
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Login</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
