import { useEffect, useState } from "react";

const useScreenWidth = () => {

  const [screenWidth, setScreenWidth] = useState(undefined);

  useEffect(() => {
  const getScreenWidth = () => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth)
    setScreenWidth(screenWidth);
  }
  window.addEventListener("resize", getScreenWidth)
  getScreenWidth();
  return () => window.removeEventListener("resize", getScreenWidth)
}, []);
return screenWidth;
}
export default useScreenWidth;