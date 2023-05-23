import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-The Imperial Toys`;
  }, [title]);
};

export default useTitle;
