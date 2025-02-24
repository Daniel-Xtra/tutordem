import { Textarea } from "../ui/textarea";

const AppTextarea = ({
  className,
  placeholder,
}: {
  className?: string;
  placeholder?: string;
}) => {
  return (
    <Textarea
      placeholder={placeholder}
      className={`${className} font-sans text-black-500 border border-black-50 font-normal p-4  text-sm/[19.6px] placeholder:font-normal placeholder:text-black-300 placeholder:text-sm/[19.6px] focus-visible:ring-0 focus:border-2 focus:border-primary-500 focus:ring-offset-4 focus:ring-1 focus:ring-transparent focus:ring-offset-primary-50 resize-none h-[108px]`}
    />
  );
};

export default AppTextarea;
