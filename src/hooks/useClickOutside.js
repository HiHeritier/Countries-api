import { useRef, useEffect } from "react";

const useClickOutside = (handleOpenState) => {
  const domNode = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (domNode.current && !domNode.current.contains(e.target)) {
        handleOpenState();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return domNode;
};

export default useClickOutside;
