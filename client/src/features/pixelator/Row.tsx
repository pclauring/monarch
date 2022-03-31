import Pixel from "./Pixel";
import styles from "./Row.module.css";

const Row = ({ width, color }: { width: number; color: string }) => {
  let pixels: JSX.Element[] = [];
  for (let index = 0; index < width; index++) {
    pixels.push(<Pixel key={index} color={color} />);
  }
  return <div className={styles.row}>{pixels}</div>;
};

export default Row;
