import { Button as ButtonProps } from "@/models/types";
import { Button as UIButton } from "../ui/button";

const Button: React.FC<ButtonProps> = ({
  color,
  size,
  label,
  icon,
  className,
  onClick,
}) => {
  // Define color classes
  const colors = {
    main: "bg-primary-500 text-white",
    blue: "bg-blue-500 text-white",
    white: "bg-white text-black",
  };

  // Define size classes
  const sizes = {
    sm: " h-[40px] text-[12px]",
    md: " h-[56px] text-[14px]",
    lg: " h-[56px] text-[14px]",
  };

  // Merge className with color and size
  // const buttonClasses = `${colors[color]} ${sizes[size]} ${className ? className : ""} font-sans rounded-sm flex justify-center items-center gap-[10px] font-medium hover:bg-primary-800 transition`;

  return (
    <div>
      <UIButton
        onClick={onClick}
        className={`${colors[color]} ${className} font-sans rounded-sm flex items-center justify-center gap-[10px] font-medium hover:bg-primary-800 transition ${sizes[size]}`}
      >
        <span className="">{label}</span>
        <span className="h-[16px] w-[16px]">{icon}</span>
      </UIButton>
    </div>
  );
};

export default Button;
