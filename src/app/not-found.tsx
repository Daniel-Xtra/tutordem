import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-red-500">Oops! Page Not Found</h1>
      <p className="text-gray-500 mt-2">
        The requested page does not exist in Dashboard.
      </p>
      <a href="/dashboard/overview" className="mt-4 text-blue-500 underline">
        Go Back to Dashboard
      </a>
    </div>
  );
}
