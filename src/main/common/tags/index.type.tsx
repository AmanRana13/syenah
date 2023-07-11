import React from "react";
export interface ITags {
  label: string;
  variant?: "filled" | "outlined";
  avatar?: {
    image?: string;
    alt?: string;
  };
  circle?: boolean;
  onDelete?: () => void;
  onClick?: () => void;
}
