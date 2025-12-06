import { useEffect } from "react";

export const useDisableBodyScroll = (isopen: boolean) => {
  useEffect(() => {
    const orginalStyle = window.getComputedStyle(document.body).overflow;

    if (isopen) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = orginalStyle;

    return () => {
      document.body.style.overflow = orginalStyle;
    };
  }, [isopen]);
};
