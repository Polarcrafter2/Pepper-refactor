import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { errorLogger } from "./logger";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function tryCatch<TData>(callback: () => TData): TData {
  try {
    return callback();
  } catch (error) {
    errorLogger(`An error occurred in ${callback.name}:`, error);
    throw error;
  }
}

export async function tryCatchAsync<TData>(
  callback: () => Promise<TData>,
): Promise<TData> {
  try {
    return await callback();
  } catch (error) {
    errorLogger(`An error occurred in ${callback.name}:`, error);
    throw error;
  }
}
