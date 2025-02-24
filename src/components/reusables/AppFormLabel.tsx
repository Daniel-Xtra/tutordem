import React from "react";
import { FormLabel } from "../ui/form";

const AppFormLabel = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <FormLabel className={`${className} font-normal text-xs/[16.8px]`}>
      {children}
    </FormLabel>
  );
};

export default AppFormLabel;
