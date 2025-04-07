import AuthHeader from "@/components/layouts/auth/header/header";
import Image from "next/image";
import bg1 from "../../../public/assets/images/bg1.png";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <AuthHeader className="fixed top-0 z-10" />

      <div className="flex flex-1">
        <div className=" hidden lg:w-5/12 h-screen lg:flex items-center justify-center fixed left-0">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <Image src={bg1} alt="image" loading="lazy" fill={true} />
          </div>
        </div>

        <div className="w-full lg:w-7/12 ml-auto h-screen overflow-y-auto p-8 mt-28">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
