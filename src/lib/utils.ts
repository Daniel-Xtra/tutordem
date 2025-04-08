import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatList(value: string) {
  return value.replaceAll("_", " ");
}

export const formatCurrency = (
  amount: number | string,
  currency: string = "NGN"
) => {
  const numericAmount =
    typeof amount === "string" ? parseFloat(amount) : amount;

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericAmount);
};

export function getStatusColor(status: string): string {
  const statusColors: { [key: string]: string } = {
    approved: "text-success-600",
    rejected: "text-warning-600",
    draft: "text-warning-600",
    "pending-review": "text-warning-600",
    live: "text-error-500",
  };

  return statusColors[status];
}
