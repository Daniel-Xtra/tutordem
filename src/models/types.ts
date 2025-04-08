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
  type?: string;
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
  roles?: string[];
}

export interface SettingsTabLinks {
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
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export interface Student {
  firstName: string;
  lastName: string;
  shortName: string;
  gender: string;
  dob: string;
  phoneNumber: string;
  email: string;
  accessToDashboard: boolean;
}

export interface QuizInterface {
  id: number;
  title: string;
  subject: string;
  class: string;
  numberOfQuestions: number;
  createdAt: string;
  numberOfPlays: number;
  points: number;
  timeFrame: number;
  hasReference?: boolean;
}

export interface LibraryResource {
  title: string;
  documentType: string;
  subject: string;
  class: string;
  currentPage?: string;
  totalPages?: string;
  rating: string;
  numberOfStars: string;
  isBookmarked: boolean;
  url?: string;
  created_at?: string;
  status?: string;
}
