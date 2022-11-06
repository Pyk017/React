import { useRef, useEffect } from "react";

export default function useUpdateEffect(callback: any, dependencies: any) {
  const firstRenderRef = useRef(true);
  const testInt = useRef(1);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      console.log("inif ", testInt, dependencies);
      return;
    }
    console.log("inoutif ", testInt, dependencies);
    testInt.current = testInt.current + 1;
    return callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
