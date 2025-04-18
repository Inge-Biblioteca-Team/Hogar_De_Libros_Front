import { lazy } from "react";

export function lazyWithRetry<T extends React.ComponentType<unknown>>(
  importFn: () => Promise<{ default: T }>
) {
  return lazy(() =>
    importFn().catch((error) => {
      console.error("Lazy load error:", error);

      setTimeout(() => {
        window.location.reload();
      }, 100);

      return new Promise(() => {});
    })
  );
}
