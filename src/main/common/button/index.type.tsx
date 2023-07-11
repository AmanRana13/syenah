export interface IButton {
  name: string;
  onClick: () => void;
  variant: "container" | "outlined" | "text";
}
