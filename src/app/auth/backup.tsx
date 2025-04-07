{
  /* <Tabs defaultValue="account" className="w-full">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger
      onClick={() => updateTabs("account")}
      value="account"
      className="
      w-full
      data-[state=active]:border-4
      data-[state=active]:border-[1px]
      data-[state=active]:border-primary-500
      data-[state=active]:bg-primary-25
      data-[state=active]:shadow-none
      hover:bg-transparent
      px-[16px]
      py-[12px]
      data-[state=active]:text-foreground
      data-[state=active]:ring-4
      data-[state=active]:font-semibold
      ring-primary-25
      ring-offset-0
      inset-0
      transition-all
      duration-300
    "
    >
      <span className="">As a parent</span>
      <span className="text-xs text-neutral-700 font-normal flex justify-between items-center">
        Sign up your wards
        <Icon
          icon="check"
          width={20}
          height={20}
          className="text-primary-500 opacity-0 data-[state=active]:opacity-100 transition-opacity duration-300"
        />
      </span>
    </TabsTrigger>
    <TabsTrigger
      onClick={() => updateTabs("student")}
      value="student"
      className="
      w-full
      data-[state=active]:border-4
      data-[state=active]:border-[1px]
      data-[state=active]:border-primary-500
      data-[state=active]:bg-primary-25
      data-[state=active]:shadow-none
      hover:bg-transparent
      px-[16px]
      py-[12px]
      data-[state=active]:text-foreground
      data-[state=active]:ring-4
      data-[state=active]:font-semibold
      ring-primary-25
      ring-offset-0
      inset-0
      transition-all
      duration-300
    "
    >
      <span className="">As a student</span>
      <span className="text-xs text-neutral-700 font-normal flex justify-between items-center">
        Sign Up
        <Icon
          icon="check"
          width={20}
          height={20}
          className="text-primary-500 opacity-0 data-[state=active]:opacity-100 transition-opacity duration-300"
        />
      </span>
    </TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="">
    <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-5">
      <div>
        <AppInput
          label="Email address"
          type="email"
          placeholder="ebenezer@test.com"
          className="mt-2"
          value={email}
          onChange={(value) => setEmail(value)}
        />
      </div>
      <div>
        <AppInput
          label="First name"
          type="text"
          placeholder="Akin"
          className="mt-2"
          value={firstName}
          onChange={(value) => setFirstName(value)}
        />
      </div>
      <div>
        <AppInput
          label="Last name"
          type="text"
          placeholder="Ebenezer"
          className="mt-2"
          value={lastName}
          onChange={(value) => setLastName(value)}
        />
      </div>
      <div>
        <PhoneNumberInput
          form={{ register, formState: { errors } }}
          formName="phoneNumber"
          disable={false}
          countryCode={countryCode}
          selectedCountryCode={selectedCountryCode}
          onCountryCodeChange={setSelectedCountryCode}
          label="Phone number"
          onChange={setPhoneNumber}
        />
      </div>
      <div className="">
        <AppSelect
          label="State"
          value={state}
          options={[
            { label: "Lagos", value: "lagos" },
            { label: "Kaduna", value: "kaduna" },
          ]}
          placeholder="Lagos state"
          onChange={(value) => setState(value)}
        />
      </div>
      <div>
        <AppInput
          label="Address"
          type="text"
          placeholder="12, Botanical garden, ebute-meta"
          className="mt-2"
          value={address}
          onChange={(value) => setAddress(value)}
          showPasswordIcon={true}
          icon={svgIcon({ icon: "/assets/images/map-point.png" })}
        />
      </div>

      <div className="my-4 flex items-center space-x-2">
        <Checkbox
          id="terms"
          className="aspect-square size-4 rounded border border-black-200 text-primary-500 ring-1 ring-offset-[6px] ring-[#EDEDF3] outline-none focus:ring-offset-primary-25 focus:outline-none focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50 "
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none text-black-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept
          <span className="text-primary-500 font-bold">
            terms and conditions
          </span>
          and <span className="text-primary-500 font-bold">privay policy</span>
        </label>
      </div>
      <div className="w-full">
        <Button
          className="flex items-center justify-center w-full h-[56px] mt-12 bg-primary-500 hover:bg-primary-700 text-white"
          size="lg"
          type="submit"
        >
          Get Started
          <Image
            src="/assets/icons/arrow-right-white.svg"
            width={20}
            height={10}
            alt="arrow-right"
          />
        </Button>
        <div className="w-full flex items-center pt-3 justify-center">
          <p className="font-medium text-base text-[#768796]">
            Already have an account?
            <Link className="text-neutral-950" href="/">
              Login
            </Link>
          </p>
        </div>
      </div>
    </form>
  </TabsContent>
  <TabsContent value="student">
    <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-5">
      <div>
        <AppInput
          label="Email address"
          type="email"
          placeholder="ebenezer@test.com"
          className="mt-2"
          value={email}
          onChange={(value) => setEmail(value)}
        />
      </div>
      <div>
        <AppInput
          label="First name"
          type="text"
          placeholder="Akin"
          className="mt-2"
          value={firstName}
          onChange={(value) => setFirstName(value)}
        />
      </div>
      <div>
        <AppInput
          label="Last name"
          type="text"
          placeholder="Ebenezer"
          className="mt-2"
          value={lastName}
          onChange={(value) => setLastName(value)}
        />
      </div>
      <div>
        <PhoneNumberInput
          form={{ register, formState: { errors } }}
          formName="phoneNumber"
          disable={false}
          countryCode={countryCode}
          selectedCountryCode={selectedCountryCode}
          onCountryCodeChange={setSelectedCountryCode}
          label="Phone number"
          onChange={setPhoneNumber}
        />
      </div>
      <div className="">
        <AppSelect
          label="State"
          value={state}
          options={[
            { label: "Lagos", value: "lagos" },
            { label: "Kaduna", value: "kaduna" },
          ]}
          placeholder="Lagos state"
          className="h-[52px]"
          onChange={(value) => setState(value)}
        />
      </div>
      <div>
        <AppInput
          label="Address"
          type="text"
          placeholder="12, Botanical garden, ebute-meta"
          className="mt-2"
          value={address}
          onChange={(value) => setAddress(value)}
          showPasswordIcon={true}
          icon={svgIcon({ icon: "/assets/images/map-point.png" })}
        />
      </div>
      <div className="my-4 flex items-center space-x-2">
        <Checkbox
          id="terms"
          className="appearance-none checked:bg-primary-25 checked:border-primary-500 "
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none text-black-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept
          <span className="text-primary-500 font-bold">
            terms and conditions
          </span>
          and <span className="text-primary-500 font-bold">privay policy</span>
        </label>
      </div>
      <div className="mt-6 bottom-0 left-0 w-full">
        <Button
          className="flex items-center justify-center w-full h-[56px] bg-primary-500 hover:bg-primary-700 text-white"
          size="lg"
          type="submit"
        >
          Get Started
          <Image
            src="/assets/icons/arrow-right-white.svg"
            width={20}
            height={10}
            alt="arrow-right"
          />
        </Button>
        <div className="w-full flex items-center justify-center">
          <p className="font-medium text-base text-[#768796]">
            Already have an account?
            <Link className="text-neutral-950" href="/">
              Login
            </Link>
          </p>
        </div>
      </div>
    </form>
  </TabsContent>
</Tabs>; */
}
