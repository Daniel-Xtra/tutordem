/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Input } from '@/components/ui/input'; 
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface CountryCode {
  code: string;
  name: string;
  flag: string; 
}

interface PhoneNumberInputProps {
  form: any; // Replace with your form library type (e.g., react-hook-form)
  formName: string;
  disable?: boolean;
  countryCode: CountryCode[];
  selectedCountryCode: number;
  onCountryCodeChange: (index: number) => void; 
  label: string;
}

const PhoneNumberInput = ({
  form,
  formName,
  disable = false,
  countryCode,
  selectedCountryCode,
  onCountryCodeChange,
  label,
}: PhoneNumberInputProps) => {
  const [hideCountryCodeList, setHideCountryCodeList] = useState(true);

  const showCountryCodes = () => {
    setHideCountryCodeList(!hideCountryCodeList);
  };

  const selectCountryCode = (index: number) => {
    onCountryCodeChange(index);
    setHideCountryCodeList(true);
  };

//   const isError = form.get(formName).invalid && (form.get(formName).touched || form.get(formName).dirty);
//   const isValid = form.get(formName).valid && (form.get(formName).touched || form.get(formName).dirty);

  return (
    <div className="relative space-y-2">
      <label className="text-xs font-normal text-black-400">{label}</label>

      <div
        className={`flex items-center border rounded-sm p-2 h-[52px] focus-visible:ring-2 focus-visible:ring-primary-50`}
      >
        <div
          className="flex items-center cursor-pointer space-x-2"
          onClick={showCountryCodes}
        >
          <Image
            src={countryCode[selectedCountryCode].flag}
            alt={countryCode[selectedCountryCode].name}
            className="w-[22px] h-[16px] "
            width={20}
            height={20}
          />
           <ChevronDown className='w-[16px] h-[16px]' />
        </div>

        <Input
          type="tel"
          placeholder="81xxxxxxxx"
          className="flex-1 border-t border-b border-l-0 border-r-0 focus-visible:ring-0 focus-visible:ring-primary-50 focus:ring-0"
          maxLength={10}
          disabled={disable}
          {...form.register(formName)}
        />
      </div>

      {!hideCountryCodeList && (
        <div className="absolute top-16 left-0 bg-white border rounded-md shadow-lg z-10 w-48">
          {countryCode.map((country, index) => (
            <div
              key={index}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => selectCountryCode(index)}
            >
              <Image
                src={country.flag}
                alt={country.name}
                className="w-5 h-5 mr-2"
                width={20}
                height={20}
              />
              <span className="text-sm">{country.name}</span>
              <span className="text-sm ml-auto">{country.code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhoneNumberInput;