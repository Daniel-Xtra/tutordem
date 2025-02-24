import { ReactNode } from "react";
type Color = "main" | "blue" | "white";
type Size = "sm" | "md" | "lg";
// type icon = FC<SVGProps<SVGSVGElement>>;
export interface Button {
  color: Color;
  size: Size;
  label: string;
  icon: ReactNode;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface InputProps {
  label: string;
  type: string;
  className?: string;
  placeholder?: string;
  showPasswordIcon?: boolean;
  icon?: ReactNode;
  iconText?: string;
}

export interface NavLinks {
  path: string;
  name: string;
  icon: string;
  activeIcon: string;
}

export interface UtilityType {
  name: string;
}

export interface ModalProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  content: React.ReactNode;
  buttonText?: string;
  className?: string;
  primaryFn?: () => void;
  actions?: React.ReactNode;
}
