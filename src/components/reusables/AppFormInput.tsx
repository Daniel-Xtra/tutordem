import React, { forwardRef } from "react";
import { Input } from "../ui/input";

const AppFormInput = forwardRef<
  HTMLInputElement,
  {
    placeholder: string;
    className?: string;
    showLeftIcon?: boolean;
    showRightIcon?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    togglePassword?: () => void;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
  }
>(
  (
    {
      placeholder,
      className,
      showLeftIcon = false,
      showRightIcon = false,
      leftIcon,
      rightIcon,
      togglePassword,
      type,
      onChange,
      value,
    },
    ref
  ) => {
    return (
      <div className="relative">
        {showLeftIcon && (
          <div className="pointer-events-none absolute inset-y-0 start-0 z-50 grid w-10 place-content-center ">
            <span>{leftIcon}</span>
          </div>
        )}
        <Input
          ref={ref}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
          className={` ${className} font-sans text-black-500 border border-black-50 font-normal p-4 h-[52px] text-sm/[19.6px] placeholder:font-normal placeholder:text-black-300 placeholder:text-sm/[19.6px] focus:border-2 focus:border-primary-500 focus:ring-offset-4 focus:ring-1 focus:ring-transparent focus:ring-offset-primary-50`}
        />

        {showRightIcon && (
          <div className="absolute inset-y-0 end-0 grid w-10 place-content-center ">
            <span
              className="text-[11px]/[15.4px] flex items-start justify-center mr-4 font-normal text-black-300 cursor-pointer"
              onClick={togglePassword}
            >
              {rightIcon}
            </span>
          </div>
        )}
      </div>
    );
  }
);

AppFormInput.displayName = "AppFormInput";

export default AppFormInput;
