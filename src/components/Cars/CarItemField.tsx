import { FC } from "react";

import { Typography } from "@mui/material";

const CarItemField: FC<{ label: string; value: string }> = (props) => {
  return (
    <ul>
      <Typography
        component="h5"
        variant="h6"
        color="text.primary"
        align="center"
      >
        <b>{props.label}:&nbsp;</b>
        {props.value}
      </Typography>
    </ul>
  );
};

export default CarItemField;
