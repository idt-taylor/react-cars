import { FC } from "react";

import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const ReviewFormField: FC<{
  control: any;
  name: string;
  value: string | number;
  label: string;
}> = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <TextField
          fullWidth
          disabled
          {...field}
          label={props.label}
          type="text"
          sx={{ marginBottom: "10px" }}
          value={props.value}
        />
      )}
    />
  );
};

export default ReviewFormField;
