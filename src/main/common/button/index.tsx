import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { IButton } from "./index.type";

const StyledButtons = styled(Button)((props: any) => ({
  backgroundColor: "#1FA2D4",
  borderRadius: props.circle ? "100px" : "4px",
  border: 0,
  color: "#fff",
}));

const Buttons = (props: IButton) => {
  const { name, variant, onClick, ...extra } = props;
  return (
    <StyledButtons
      className={"avatarSmall"}
      {...extra}
      variant={variant}
      onClick={onClick}
    >
      {name}
    </StyledButtons>
  );
};

export default Buttons;
