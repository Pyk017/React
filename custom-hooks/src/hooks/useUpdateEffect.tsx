import { useRef, useEffect } from "react";

export default function useUpdateEffect(callback: any, dependencies: any) {
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return undefined;
    }

    return callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
