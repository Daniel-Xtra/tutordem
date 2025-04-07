import React from "react";
import Button from "@/components/reusables/Button";
import Link from "next/link";
import Image from "next/image";

interface ActionBtnProps {
  className?: string;
  onSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  actionText: string;
  url: string;
  clickableText: string;
  type?: string;
}

const FormActionBtn: React.FC<ActionBtnProps> = ({
  className,
  onSubmit = () => {},
  actionText,
  url,
  clickableText,
  type,
}) => {
  const svgIcon = ({ icon }: { icon: string }) => {
    return <Image src={icon} alt="icon" width={24} height={24} />;
  };

  return (
    <div className={className}>
      <Button
        onClick={onSubmit}
        className="w-full md:mb-4"
        color="main"
        size="lg"
        label="Get started"
        icon={svgIcon({ icon: "/assets/icons/arrow-right-white.svg" })}
        type={type}
      />
      <div className="w-full flex items-center justify-center">
        <p className="font-medium text-base text-[#768796]">
          {actionText}
          <Link className="text-neutral-950" href={url}>
            {clickableText}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FormActionBtn;
