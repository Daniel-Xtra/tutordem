/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReusableDialog } from "../reusables/ReusableDialog";
import AddWardForm from "../forms/add-ward";
import { Button as ShadBtn } from "@/components/ui/button"
import { useRouter } from "next/navigation";

const AddChild = ({ closeModal }: { closeModal: () => void }) => {
    const router = useRouter();
    const onSubmit = () => {
        router.push('/auth/success');
    }
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
                        <AddWardForm />
                    </>
                }
                actions={
                    <div className="flex items-center justify-center gap-2">
                        <ShadBtn
                            className="bg-transparent p-5 rounded-sm h-14 font-sans w-full lg:w-[242px] font-semibold text-sm/[19.6px] text-neutral-950"
                            onClick={closeModal}
                        >
                            Cancel
                        </ShadBtn>
                        <ShadBtn onClick={onSubmit} className="bg-primary-500 p-5 rounded-sm font-sans h-14 w-full lg:w-[242px] font-semibold text-sm/[19.6px] text-[#FFFFFF]">
                            Save
                        </ShadBtn>
                    </div>
                }
            >

            </ReusableDialog>
        </div>
    );
}

export default AddChild;