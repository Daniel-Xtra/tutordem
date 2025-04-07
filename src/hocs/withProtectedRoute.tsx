// /* eslint-disable react/display-name */
// "use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import useAuthStore from "@/store/useAuthStore";

// interface WithProtectedRouteProps {
//   isAuthenticated: boolean;
//   loadingComponent?: React.ReactNode; // Optional custom loading component
// }

// export default function withProtectedRoute<P>(
//   WrappedComponent: React.ComponentType<P>,
//   allowedRoles: string[]
// ) {
//   return (props: P & WithProtectedRouteProps) => {
//     const user = useAuthStore((state) => state.user);

//     const router = useRouter();

//     useEffect(() => {
//       if (!user) {
//         return;
//       }

//       if (!user.isAuthenticated) {
//         router.push("/auth");
//       } else if (!allowedRoles.includes(user.membershipType)) {
//         router.push("/dashboard/overview"); // Redirect if not authorized
//       }
//     }, [user, router]);

//     return user &&
//       user.isAuthenticated &&
//       allowedRoles.includes(user.membershipType) ? (
//       <WrappedComponent {...props} isAuthenticated={user.isAuthenticated} />
//     ) : null;
//   };
// }

// components/layouts/ProtectedRoute.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    if (!user.isAuthenticated) {
      router.push("/auth");
    } else if (!allowedRoles.includes(user.membershipType)) {
      router.push("/dashboard/overview");
    }
  }, [user, allowedRoles, router]);

  return <>{children}</>;
}
