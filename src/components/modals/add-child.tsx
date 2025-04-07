/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReusableDialog } from "../reusables/ReusableDialog";
import { Button as ShadBtn } from "@/components/ui/button";
import { Student } from "@/models/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check } from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import AppInput from "../reusables/AppInput";
import PhoneNumberInput from "../reusables/PhoneNumberInput";

interface AddChildProps {
  closeModal: () => void;
  onSubmit: (newStudent: Student) => void;
}

const AddChild = ({ closeModal, onSubmit }: AddChildProps) => {
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

  const handleSave = () => {
    const payload = {
      firstName,
      lastName,
      dob,
      email,
      accessToDashboard: access,
      gender: selected,
      phoneNumber: `+234${selectedCountryCode}${phoneNumber}`,
      shortName: firstName.charAt(0) + lastName.charAt(0),
    };
    onSubmit(payload);
  };
  return (
    <div>
      <ReusableDialog
        title={"Add student/ward"}
        description={
          <>
            <span className="text-xs/[16.8px] font-normal text-neutral-600">
              Every child learns differently
            </span>
          </>
        }
        primaryFn={() => {}}
        content={
          <>
            {/* <AddWardForm onSubmit={onSubmit} /> */}
            <ScrollArea type="always" style={{ height: 350, width: "100%" }}>
              <form className="space-y-3 font-sans pb-6">
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
                      <div
                        key={accessName}
                        className="flex items-center space-x-3"
                      >
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
          </>
        }
        actions={
          <div className="flex items-center justify-between gap-3 w-full">
            <ShadBtn
              className="bg-transparent p-5 rounded-sm h-14 font-sans w-full font-semibold text-sm/[19.6px] text-neutral-950"
              onClick={closeModal}
            >
              Cancel
            </ShadBtn>
            <ShadBtn
              onClick={handleSave}
              className="bg-primary-500 p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-white"
            >
              Save
            </ShadBtn>
          </div>
        }
      />
    </div>
  );
};

export default AddChild;
