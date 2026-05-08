import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This ensures that whenever the URL path changes, we scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
