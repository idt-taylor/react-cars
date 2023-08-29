import { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import TextField from "@mui/material/TextField";

const LoginDialogContent: FC<{
  register: UseFormRegister<FieldValues>;
  emailError: string;
  passwordError: string;
}> = (props) => {
  return (
    <DialogContent>
      <DialogContentText>
        Enter your email address and password to Login
      </DialogContentText>
      <TextField
        {...props.register("emailAddress")}
        autoFocus
        margin="dense"
        id="email"
        label="Email Address"
        type="text"
        fullWidth
        variant="standard"
        helperText={props.emailError}
      />
      <TextField
        {...props.register("password")}
        margin="dense"
        id="password"
        label="Password"
        type="password"
        fullWidth
        variant="standard"
        helperText={props.passwordError}
      />
    </DialogContent>
  );
};

export default LoginDialogContent;
