import { FC } from "react";

import {
  Controller,
  FieldError,
  Merge,
  FieldErrorsImpl,
} from "react-hook-form";
import { TextField, MenuItem } from "@mui/material";

type Rules = {
  required: string;
};

const CarFormDropdown: FC<{
  control: any;
  name: string;
  label: string;
  disabled: boolean;
  errors: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  rules: Rules;
  data: any[];
  onChanged: any;
}> = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      render={({ field }) => (
        <TextField
          select
          fullWidth
          disabled={props.disabled}
          {...field}
          label={props.label}
          type="text"
          sx={{ marginBottom: "10px" }}
          error={!!props.errors}
          helperText={props.errors?.message?.toString()}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            field.onChange(event.target.value);
            props.onChanged(event);
          }}
        >
          {props.data.map((value: any) => (
            <MenuItem key={value.id} value={value.description}>
              {value.description}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default CarFormDropdown;
