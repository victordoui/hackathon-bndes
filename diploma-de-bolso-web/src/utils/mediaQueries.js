import { useMediaQuery } from "react-responsive";

export const useDesktop = () => {
  return useMediaQuery({ query: "(min-width: 900px)" });
};
