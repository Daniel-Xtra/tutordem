import {
  AccountDetailsFormValues,
  accountDetailsSchema,
} from "@/schemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import AppFormInput from "../reusables/AppFormInput";
import AppFormLabel from "../reusables/AppFormLabel";
import { AppModal } from "../reusables/AppModal";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { ChevronDown } from "lucide-react";

import Success from "./success";
import Icon from "../reusables/AppIcon";

const AccountDetails = ({ closeModal }: { closeModal: () => void }) => {
  const [verifyAccount, setVerifyAccount] = React.useState(false);
  const form = useForm<AccountDetailsFormValues>({
    resolver: zodResolver(accountDetailsSchema),
  });
  return (
    <div>
      {!verifyAccount ? (
        <AppModal
          title={"Add Bank account for withdrawal"}
          description={
            <>
              <span className="text-xs/[16.8px] font-normal font-sans text-neutral-600">
                Money gotten from your classes can be paid here.
              </span>
            </>
          }
          primaryFn={() => {}}
          content={
            <div className="space-y-6 font-sans">
              <Form {...form}>
                <form className="space-y-6 font-sans">
                  <div className=" space-y-3">
                    <AppFormLabel className=" text-black-400">
                      Bank
                    </AppFormLabel>

                    <Popover>
                      <PopoverTrigger asChild className="h-[52px]">
                        <FormControl>
                          <Button
                            type="button"
                            variant="outline"
                            role="combobox"
                            className=" w-full justify-between font-normal text-sm/[19.6px] font-sans text-black-500"
                          >
                            Select Bank
                            <ChevronDown className="opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 sm:w-96 p-1.5">
                        <Command>
                          <CommandInput
                            placeholder="Search for a bank"
                            className="h-9"
                          />
                          <CommandList>
                            <CommandEmpty>No subject found.</CommandEmpty>
                            <CommandGroup>
                              <CommandItem className="font-sans capitalize text-neutral-950"></CommandItem>
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-3">
                    <AppFormLabel className="text-black-400">
                      Account number
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="account_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <AppFormInput placeholder="" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-3">
                    <AppFormLabel className="text-black-400">
                      Withdrawal automation
                    </AppFormLabel>

                    <FormField
                      control={form.control}
                      name="withdrawal_automation"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                          >
                            <SelectTrigger className="h-[52px]">
                              <SelectValue placeholder="" {...field} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup className=" p-1.5 !rounded-none">
                                <SelectItem value="title"></SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="p-4 rounded gap-2 bg-primary-25 flex items-center">
                    <Icon icon={"bank-icon"} width={24} height={24} />
                    <div className="flex flex-wrap justify-between w-full">
                      <span className="font-normal text-sm/[19.6px] text-neutral-950">
                        Akintunde Ebenezer Jerry
                      </span>
                      <span className="font-medium text-sm/[19.6px] text-neutral-950">
                        1234567890
                      </span>
                    </div>
                  </div>
                </form>
              </Form>

              <p className="font-medium text-xs/[16.8px] text-warning-500">
                Provided account details must be linked to your BVN for
                approval.
              </p>
            </div>
          }
          actions={
            <>
              <Button
                type="button"
                className="bg-transparent p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-neutral-950"
                onClick={closeModal}
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="bg-primary-500 p-5 rounded-sm font-sans h-14 w-full font-semibold text-sm/[19.6px] text-white"
                onClick={() => setVerifyAccount(true)}
              >
                Add Account
              </Button>
            </>
          }
        />
      ) : (
        <Success
          title="Bank Details Successfully added"
          description={"Your bank details has been added to your payment "}
          icon="success-icon"
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default AccountDetails;
