import { useRef } from "react";

function useLatest<T>(value: T) {
  const valueRef = useRef(value);

  valueRef.current = value;

  return valueRef;
}

export { useLatest };
