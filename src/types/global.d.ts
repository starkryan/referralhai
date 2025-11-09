// Global type definitions
declare global {
  interface Window {
    toast?: {
      success: (message: string) => void;
      error: (message: string) => void;
      info: (message: string) => void;
      warning: (message: string) => void;
      loading: (message: string) => void;
    };
  }
}

export {};