"use client";
import React from "react";

const LayoutWithOutBg = ({ children }: { children: React.ReactNode }) => {
  return (
    // <section className="flex flex-1 bg-white lg:bg-neutral-100 min-h-screen">
    //     <main className="w-full flex items-start lg:items-center justify-center mt-[88px]">
    //         <div className="w-full flex min-h-[calc(100vh-88px)] items-start lg:items-center justify-center">
    //             {children}
    //         </div>
    //     </main>
    // </section>

    <div className="font-sans">{children}</div>
  );
};

export default LayoutWithOutBg;
