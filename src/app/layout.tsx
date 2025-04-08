"use client";
import "./globals.css";
import { dmSans, manrope, poppins, roboto_mono, stix_two_text } from "./fonts";
import AuthHeader from "@/components/layouts/auth/header/header";
import { usePathname } from "next/navigation";
import LayoutWithBg from "@/components/layouts/auth/LayoutWithBg";
import LayoutWithOutBg from "@/components/layouts/auth/LayoutWithOutBg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const routes = [
    "/",
    "/signup",
    "/forgotpassword",
    "/invited-user-signup",
    "/parent/signup",
    "/student/signup",
    "/tutor/signup",
  ];

  // Corrected logic using `.some()`
  const showMainHeader = !["/dashboard", "/auth"].some((prefix) =>
    pathname.startsWith(prefix)
  );

  // Corrected `hideAuthImage`
  const hideAuthImage = !routes.includes(pathname);
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${stix_two_text.variable} ${manrope.variable}  ${dmSans.variable}  ${roboto_mono.variable} antialiased h-screen flex flex-col`}
      >
        {showMainHeader && <AuthHeader className="fixed top-0 z-10" />}

        {!hideAuthImage ? (
          <LayoutWithBg>{children}</LayoutWithBg>
        ) : (
          <LayoutWithOutBg>{children}</LayoutWithOutBg>
        )}
      </body>
    </html>
  );
}
