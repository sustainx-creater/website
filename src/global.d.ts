declare global {
  interface Window {
    particlesJS: (tag: string, options: Record<string, unknown>) => void;
    Stats: () => unknown;
    pJSDom: Array<unknown>;
  }
}
export {};
