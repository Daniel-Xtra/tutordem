"use client";
import "./globals.css";
import { dmSans, manrope, poppins, roboto_mono, stix_two_text } from "./fonts";
import AuthHeader from "@/components/layouts/auth/header/header";
import { usePathname } from "next/navigation";
import LayoutWithBg from "@/components/layouts/auth/LayoutWithBg";
import LayoutWithOutBg from "@/components/layouts/auth/LayoutWithOutBg";
import AuthProvider from "@/contexts/auth.context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const routes = ["/", "/signup", "/forgotpassword", "/parent/signup"];
  const showMainHeader = !pathname.startsWith("/dashboard");

  const hideAuthImage = !routes.includes(pathname || "");
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${stix_two_text.variable} ${manrope.variable}  ${dmSans.variable}  ${roboto_mono.variable} antialiased`}
      >
        <AuthProvider>
          {showMainHeader && <AuthHeader />}
          {!hideAuthImage ? (
            <LayoutWithBg>{children}</LayoutWithBg>
          ) : (
            <LayoutWithOutBg>{children}</LayoutWithOutBg>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
