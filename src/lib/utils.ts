import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function debugLogger(message: string, ...other: unknown[]): void {
  // eslint-disable-next-line no-console
  console.log(message, ...other);
}
