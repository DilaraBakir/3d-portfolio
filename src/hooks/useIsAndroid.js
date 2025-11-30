// src/hooks/useIsAndroid.js
import { useEffect, useState } from "react";

export const useIsAndroid = () => {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // SSR / build sırasında navigator olmadığı durumlar için koruma
    if (typeof navigator === "undefined") return;

    const ua = navigator.userAgent || navigator.vendor || window.opera;
    setIsAndroid(/Android/i.test(ua));
  }, []);

  return isAndroid;
};
