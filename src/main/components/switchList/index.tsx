import React from "react";
import ButtonGroup from '@mui/joy/ButtonGroup';
import Buttons from "../../common/button";

const mockData = {};

const ButtonList = () => {
  return (
    <ButtonGroup
      variant="solid"
      color="success"
      aria-label="button group"
      sx={{
        "--ButtonGroup-separatorColor": "none !important",
        "& > span": {
          zIndex: 3,
          background:
            "linear-gradient(to top, transparent, rgba(255 255 255 / 0.6), transparent)",
        },
      }}
    >
      <Buttons name={"Hello"} variant="outlined" onClick={() => {}} />
    </ButtonGroup>
  );
};

export default ButtonList;
