import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · IRoHS Lab` : "IRoHS Lab · IIT Bombay";
    return () => { document.title = "IRoHS Lab · IIT Bombay"; };
  }, [title]);
}
