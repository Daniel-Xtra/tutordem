"use client";
import { forwardRef, useImperativeHandle, useState } from "react";
import { useForm } from "react-hook-form";
import { Check } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import AppInput from "../reusables/AppInput";
import PhoneNumberInput from "../reusables/PhoneNumberInput";
import { Student } from "@/models/types";
interface AddWardFormProps {
  onSubmit: (data: Student) => void;
}

export interface AddWardFormRef {
  submitForm: () => void;
}

/**
 * `AddWardForm` is a React component that renders a form for adding a new student (ward).
 * It uses the `useForm` hook from `react-hook-form` for form handling and validation.
 * The form includes fields for the student's first name, last name, email, date of birth, phone number, and gender.
 * It also includes an option to grant the student access to the dashboard.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {function} props.onSubmit - The function to call when the form is submitted.
 * @param {React.Ref} ref - The reference to the form component.
 *
 * @example
 * const handleSubmit = (data) => {
 *   console.log(data);
 * };
 *
 * <AddWardForm onSubmit={handleSubmit} ref={formRef} />
 *
 * @returns {JSX.Element} The rendered form component.
 */

const AddWardForm = forwardRef<AddWardFormRef, AddWardFormProps>(
  ({ onSubmit }, ref) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const [selectedCountryCode, setSelectedCountryCode] = useState(0);
    const [selected, setSelected] = useState("male");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    const [access, setAccess] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const countryCode = [
      { code: "+234", name: "Nigeria", flag: "/assets/images/nigeria.png" },
    ];
    // const [students, setStudents] = useState([
    //   { id: 1, name: "John Doe", shortName: "J", email: "qBp8o@example.com" },
    // ]);

    // const onSubmit = (data: any) => {
    //   console.log(data);
    //   setStudents([
    //     ...students,
    //     {
    //       id: students.length + 1,
    //       name: "Akoke Anto",
    //       shortName: "A",
    //       email: "antoakoke@gmail.com",
    //     },
    //   ]);
    // };

    const handleFormSubmit = () => {
      console.log("at what point");
      const formData: Student = {
        firstName,
        lastName,
        dob,
        email,
        accessToDashboard: access,
        gender: selected,
        phoneNumber: `+234${selectedCountryCode}${phoneNumber}`,
        shortName: firstName.charAt(0) + lastName.charAt(0),
      };
      console.log({ formData });
      onSubmit(formData);
    };

    useImperativeHandle(ref, () => ({
      submitForm: () => {
        handleSubmit(handleFormSubmit)();
      },
    }));

    return (
      <ScrollArea type="always" style={{ height: 350, width: "100%" }}>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="space-y-3 font-sans pb-6"
        >
          {/* Form fields go here */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-500">Gender</span>
            {["Male", "Female"].map((gender) => (
              <div key={gender} className="flex items-center space-x-3">
                <label
                  className={`flex items-center justify-center cursor-pointer rounded-[12px] h-[36px] w-[36px] border ${
                    selected === gender ? "bg-primary-25" : ""
                  } transition-all`}
                >
                  <input
                    type="checkbox"
                    checked={selected === gender}
                    onChange={() => setSelected(gender)}
                    className="hidden"
                  />
                  <div
                    className={`w-[16px] h-[16px] flex items-center justify-center rounded-md border ${
                      selected === gender
                        ? "border-primary-500 bg-white"
                        : "border-black-50 bg-white"
                    }`}
                  >
                    {selected === gender && <Check className="w-3 h-3" />}
                  </div>
                </label>
                <span className="text-[16px] text-neutral-950 font-semibold">
                  {gender}
                </span>
              </div>
            ))}
          </div>

          {/* Add more form fields here */}
          <div className="space-y-3">
            <AppInput
              label="Student's First Name"
              type="text"
              placeholder="Akin"
              className="mt-2"
              onChange={(value) => setFirstName(value)}
              value={firstName}
            />
          </div>
          <div className="space-y-3">
            <AppInput
              label="Student's Last Name"
              type="text"
              placeholder="Ebenezer"
              className="mt-2"
              onChange={(value) => setLastName(value)}
              value={lastName}
            />
          </div>
          <div className="space-y-3">
            <AppInput
              label="Email Address"
              type="text"
              placeholder="Ebenezer@test.com"
              className="mt-2"
              onChange={(value) => setEmail(value)}
              value={email}
            />
          </div>
          <div className="space-y-3">
            <AppInput
              label="Date of Birth"
              type="date"
              placeholder="01-03-2024"
              className="mt-2"
              onChange={(value) => setDob(value)}
              value={dob}
            />
          </div>
          <div className="space-y-3">
            <PhoneNumberInput
              form={{ register, formState: { errors } }}
              formName="phoneNumber"
              disable={false}
              countryCode={countryCode}
              selectedCountryCode={selectedCountryCode}
              onCountryCodeChange={setSelectedCountryCode}
              onChange={setPhoneNumber}
              label="Phone number"
            />
          </div>
          <div className="mt-4">
            <span className="text-gray-500">
              Grant student access to dashboard
            </span>
            <div className="flex items-center space-x-4 mt-4">
              {["Yes", "No"].map((accessName) => (
                <div key={accessName} className="flex items-center space-x-3">
                  <label
                    className={`flex items-center justify-center cursor-pointer rounded-[12px] h-[36px] w-[36px] border ${
                      access ? "bg-primary-25" : ""
                    } transition-all`}
                  >
                    <input
                      type="checkbox"
                      checked={access}
                      onChange={() => setAccess(!accessName)}
                      className="hidden"
                    />
                    <div
                      className={`w-[16px] h-[16px] flex items-center justify-center rounded-md border ${
                        accessName
                          ? "border-primary-500 bg-white"
                          : "border-black-50 bg-white"
                      }`}
                    >
                      {accessName && <Check className="w-3 h-3" />}
                    </div>
                  </label>
                  <span className="text-[16px] text-neutral-950 font-semibold">
                    {accessName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </form>
      </ScrollArea>
    );
  }
);
AddWardForm.displayName = "AddWardForm";
export default AddWardForm;
