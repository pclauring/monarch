import Row from "./Row";
import styles from "./PixelPanel.module.css";

const PixelPanel = ({
  height,
  width,
  color,
}: {
  height: number;
  width: number;
  color: string;
}) => {
  let rows: JSX.Element[] = [];
  for (let index = 0; index < height; index++) {
    rows.push(<Row key={index} width={width} color={color} />);
  }
  return <div className={styles.panel}>{rows}</div>;
};

export default PixelPanel;
