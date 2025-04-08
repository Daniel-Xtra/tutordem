"use client";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

type Option = {
    value: string;
    label: string;
}

interface SelectProps {
    label: string;
    options: Option[];
    placeholder?: string;
    className?: string;
    onChange: (value: string) => void;
    selectLabel?: string;
    value?: string
}

const AppSelect = ({
    label,
    options,
    placeholder,
    className,
    onChange,
    selectLabel,
}: SelectProps) => {
    return (
        <div>
            <label className="text-xs font-normal text-black-400">{label}</label>
            <Select>
                <SelectTrigger className={className} onChange={(e) => onChange((e.target as HTMLSelectElement).value)}>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{selectLabel}</SelectLabel>
                        {options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                    
                </SelectContent>
            </Select>
        </div>
    );
}

export default AppSelect;