import styled from "@emotion/styled";
import { Chip, Avatar } from "@mui/material";
import { ITags } from "./index.type";

const StyledTag = styled(Chip)((props: any) => ({
  backgroundColor: "#E5F7FF",
  borderRadius: props.circle ? "100px" : "4px",
  border: 0,
}));

const Tags = (props: ITags) => {
  const { label, variant, onClick, onDelete, avatar, ...extra } = props;
  return (
    <StyledTag
      className={"avatarSmall"}
      {...extra}
      label={label}
      variant={variant}
      onClick={onClick}
      avatar={
        avatar ? <Avatar alt={avatar?.alt ?? ""} src={avatar?.image} /> : null
      }
      onDelete={onDelete}
      avatarSmall
    />
  );
};

export default Tags;
