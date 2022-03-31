import { useState, MouseEvent } from "react";

const Pixel = ({ color }: { color: string }) => {
  const [pixelColor, setPixelColor] = useState<string>("#fff");
  const [previousColor, setPreviousColor] = useState<string>(pixelColor);
  const [colorSelected, setColorSelected] = useState<boolean>(false);
  const handleClick = (e: MouseEvent): void => {
    setPixelColor(color);
    setColorSelected(true);
  };
  const handleMouseEnter = (e: MouseEvent): void => {
    setPreviousColor(pixelColor);
    setPixelColor(color);
  };
  const handleMouseLeave = (e: MouseEvent): void => {
    if (!colorSelected) {
      setPixelColor(previousColor);
    }
  };
  return (
    <div
      style={{ backgroundColor: pixelColor, width: "1.5rem", height: "1.5rem" }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></div>
  );
};

export default Pixel;
