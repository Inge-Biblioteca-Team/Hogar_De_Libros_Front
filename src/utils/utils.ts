export const isIOS = (): boolean => {
    const userAgent = navigator.userAgent || navigator.vendor;
    return /iPhone|iPad|iPod/i.test(userAgent);
  };
  