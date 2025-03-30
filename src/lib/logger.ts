// Define type interfaces first for better organization
interface LogEntry {
  type: LogType;
  message: string;
  timestamp: string;
}

type LogType = "log" | "info" | "warn" | "error" | "debug";

// Extend Window interface globally
declare global {
  interface Window {
    errorStorage: string[];
    errors: LogEntry[];
  }
}

// Initialize storage arrays
window.errorStorage = window.errorStorage || [];
window.errors = window.errors || [];

// Export reference to the errorStorage array
export const errorStorage: string[] = window.errorStorage;

/**
 * Logs debug messages with proper formatting
 */
export function debugLogger(message: string, ...other: unknown[]): void {
  const otherStr = other.length > 0 ? JSON.stringify(other) : "";
  window.errorStorage.push(`[DEBUG] ${message} ${otherStr}`);
}

/**
 * Logs error messages with proper formatting
 */
export function errorLogger(message: string, ...other: unknown[]): void {
  const otherStr = other.length > 0 ? JSON.stringify(other) : "";
  window.errorStorage.push(`[ERROR] ${message} ${otherStr}`);
}

function safeStringify(value: unknown): string {
  if (typeof value === "undefined") {
    return "undefined";
  }
  if (value === null) {
    return "null";
  }

  try {
    if (typeof value === "object") {
      return JSON.stringify(value);
    }
    if (typeof value === "function") {
      return "[Function]";
    }
    if (typeof value === "symbol") {
      return value.toString();
    }
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    return String(value);
  } catch {
    return "[Object could not be stringified]";
  }
}

/**
 * Captures all console outputs and stores them in window.errors array
 * Should be called once at application initialization
 */
export function captureConsoleLogs(): void {
  // Methods to capture with their corresponding types
  const methodsToCapture: LogType[] = ["log", "info", "warn", "error", "debug"];

  // Override each console method
  methodsToCapture.forEach((method) => {
    // Replace with our interceptor
    // eslint-disable-next-line no-console
    console[method] = (...args: unknown[]): void => {
      // Convert arguments to a single string message
      const logMessage = args.map(safeStringify).join(" ");

      // Create and store the log entry
      window.errors.push({
        type: method,
        message: logMessage,
        timestamp: new Date().toISOString(),
      });

      // Also add to errorStorage with appropriate prefix
      const prefix =
        method === "error"
          ? "[ERROR]"
          : method === "warn"
            ? "[WARN]"
            : method === "debug"
              ? "[DEBUG]"
              : method === "info"
                ? "[INFO]"
                : "[LOG]";
      window.errorStorage.push(`${prefix} ${logMessage}`);
    };
  });
}

export async function tryCatch<Tdata>(callback: () => Promise<Tdata> | Tdata): Promise<Tdata> {
  try {
    return await callback();
  } catch (error) {
    errorLogger("An error occurred:", error);
    throw error;
  }
}