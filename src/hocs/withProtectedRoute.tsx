/* eslint-disable react/display-name */
"use client";
import { useEffect } from "react";
import { useAuth } from "@/contexts/auth.context";
import { useRouter } from "next/navigation";

interface WithProtectedRouteProps {
  isAuthenticated: boolean;
}

export default function withProtectedRoute<P>(
  WrappedComponent: React.ComponentType<P & WithProtectedRouteProps>
) {
  return (props: P) => {
    const { isAuthenticated } = useAuth();

    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/");
      }
    }, [isAuthenticated, props, router]);

    return isAuthenticated ? (
      <WrappedComponent {...props} isAuthenticated={isAuthenticated} />
    ) : null;
  };
}
