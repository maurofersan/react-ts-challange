import React from "react";
import { FixedSizeList as List } from "react-window";
import styles from "./DataList.module.css";
import { useHome } from "../hooks/useHome";

const Row = ({
  index,
  style,
}: {
  index: number;
  style: React.CSSProperties;
}) => {
  const { data } = useHome();

  return (
    <div style={style} className={styles.item}>
      {data[index]?.name}
    </div>
  );
};

export const DataList: React.FC = () => {
  const { data, isLoading, error } = useHome();

  if (isLoading) {
    return <p className={styles.loading}>Loading...</p>;
  }
  if (error) {
    return <p className={styles.error}>Error: {error}</p>;
  }

  return (
    <List
      height={350}
      itemCount={data.length}
      itemSize={35}
      width={"100%"}
      style={{ overflowX: "hidden" }}
    >
      {Row}
    </List>
  );
};
