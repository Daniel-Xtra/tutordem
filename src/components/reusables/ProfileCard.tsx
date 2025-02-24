import { FilePenLine, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

const ProfileCard = ({ letter, name, email, showActionBtns }: { letter: string; name: string; email: string; showActionBtns?: boolean }) => {
    return (
        <div className="flex items-center w-full h-24 md:h-32 p-4 gap-6 border border-[#E4E7EC] rounded-xl shadow-sm mt-8">
            <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center bg-black-600 text-white text-xl text-3xl font-bold rounded-lg">
                {letter}
            </div>
            <div>
                <p className="text-sm md:text-lg font-semibold text-neutral-950">{name}</p>
                <p className="text-neutral-950 text-sm font-normal">{email}</p>
            </div>
            {showActionBtns &&
            <div>
                <div className="flex space-x-1">
                    <Button className="border-none border-transparent md:border md:border-neutral-300 bg-primary-25 md:bg-transparent">
                        <FilePenLine color="#783bf9" className="w-[16px] h-[16px]  border-1 border-primary-500" /> <span className="hidden md:block">Edit</span>
                    </Button>
                    <Button className="text-error-500 text-sm font-normal bg-error-25 md:bg-transparent">
                        <Trash2 color="#f04438" className="block md:hidden" /> <span className="hidden md:block">Remove</span>
                    </Button>
                </div>
            </div>
            }
        </div>
    );
}

export default ProfileCard;