const SettingsLayout = ({
  title,
  description = "This will be displayed on your profile",
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  description?: string;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-start rounded-[8px] font-sans text-neutral-950 border border-neutral-200 p-4 lg:p-10 gap-y-5 lg:gap-[100px] ${className}`}
    >
      <div className="lg:w-6/12">
        <h2 className="font-semibold text-sm/[19.6px] md:text-base/[22.4px]">
          {title}
        </h2>
        <p className="font-normal text-xs/[16.8px] md:text-sm/[19.6px]">
          {description}
        </p>
      </div>
      <div className="lg:w-6/12">{children}</div>
    </div>
  );
};

export default SettingsLayout;
