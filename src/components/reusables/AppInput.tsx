'use client';

import React from 'react';
import { Input } from "../ui/input";

import { cn } from "@/lib/utils";

interface Country {
  code: string;
  dial_code: string;
  flag: string;
  name: string;
}

interface InputProps {
  type: string;
  placeholder?: string;
  label?: string;
  className?: string;
  showPasswordIcon?: boolean;
  icon?: React.ReactNode;
  iconText?: string;
  value: string;
  onChange: (value: string) => void;
  onCountryChange?: (country: Country) => void;
}

const AppInput = ({ 
  type,
  placeholder,
  label,
  className,
  showPasswordIcon,
  icon,
  iconText,
  value = "",
  onChange = () => {},
}: InputProps) => {
  

  return (
    <div className="relative">
      <label htmlFor={type} className="text-xs font-normal text-black-400">{label}</label>
      <Input 
        type={type} 
        placeholder={placeholder} 
        className={cn("w-full focus-visible:ring-0 focus:border-2 focus:border-primary-500 focus:ring-offset-4 focus:ring-1 focus:ring-transparent focus:ring-offset-primary-50 resize-none", className)}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {showPasswordIcon && icon && (
        <span className="pointer-events-none absolute inset-y-0 end-4 mt-12 grid w-[16px] h-[16px] place-content-center text-gray-500">
          {icon}
        </span>
      )}
      {showPasswordIcon && iconText && (
        <div className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
          <span className="text-xs flex items-start justify-center mt-8 mr-4 font-normal text-black-500">
            {iconText}
          </span>
        </div>
      )}
    </div>
  );
};

export default AppInput;
