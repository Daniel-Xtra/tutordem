import Image from "next/image";

interface IconProps {
  icon: string;
  height?: number;
  width?: number;
  format?: "png" | "svg";
  className?: string;
  type?: "icons" | "images";
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  icon,
  height = 24,
  width = 24,
  format = "png",
  className,
  type = "icons",
  onClick,
}) => {
  return (
    <Image
      src={`/assets/${type}/${icon}.${format}`}
      alt={`${icon} icon`}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    />
  );
};

export default Icon;
