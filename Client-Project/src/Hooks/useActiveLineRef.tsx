import { useRef } from "react";

export const useActiveLineRef = (initialvalue: null) => {
  const Activelineref = useRef<HTMLButtonElement>(initialvalue);
  // const ActiveTab   = useRef<HTMLButtonElement>(null);
  return Activelineref;
};
