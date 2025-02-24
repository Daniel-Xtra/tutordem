import React from "react";

const LayoutWithOutBg = ({ children }: {  children: React.ReactNode }) => {
    return (
        <div className="font-sans overflow-hidden">
            {children}
        </div>
    );
}

export default LayoutWithOutBg;