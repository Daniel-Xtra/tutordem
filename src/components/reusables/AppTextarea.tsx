import { useRef, useEffect } from "react";
import { Textarea } from "../ui/textarea";
import { AiFillInfoCircle } from "react-icons/ai";

interface AppTextareaProps {
  className?: string;
  placeholder?: string;
  hint?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  showHint?: boolean;
  defaultHeight?: string;
}

const AppTextarea: React.FC<AppTextareaProps> = ({
  className,
  placeholder,
  hint = "Hint description",
  value = "",
  onChange,
  showHint = true,
  defaultHeight = "108px",
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        parseInt(defaultHeight)
      )}px`; // Ensure at least default height
    }
  }, [value, defaultHeight]);

  return (
    <div className="space-y-3 font-sans">
      <Textarea
        ref={textareaRef}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${className} text-black-500 border border-black-50 font-normal p-4 text-sm/[19.6px] placeholder:font-normal placeholder:text-black-300 placeholder:text-sm/[19.6px] focus-visible:ring-0 focus:border-2 focus:border-primary-500 focus:ring-offset-4 focus:ring-1 focus:ring-transparent focus:ring-offset-primary-50 resize-none overflow-hidden`}
        style={{ minHeight: defaultHeight }}
      />

      {showHint && (
        <span className="text-black-400 font-normal text-[11px]/[15.4px] flex items-center gap-1.5">
          <AiFillInfoCircle className="size-3" /> {hint}
        </span>
      )}
    </div>
  );
};

export default AppTextarea;
