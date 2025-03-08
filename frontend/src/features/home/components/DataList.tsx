import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";
import styles from "./DataList.module.css";
import { useHome } from "../hooks/useHome";
import Paginator from "../../../shared/components/paginator/Paginator";

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
  const [page, setPage] = useState(1);
  const { data, totalPages, error, fetchData } = useHome();

  const handlePageChange = async (newPage: number) => {
    await fetchData(newPage);
    setPage(newPage);
  };

  if (error) {
    return <p className={styles.error}>Error: {error}</p>;
  }

  return (
    <Paginator
      page={page}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    >
      <List
        height={350}
        itemCount={data.length}
        itemSize={35}
        width={"100%"}
        style={{ overflowX: "hidden" }}
      >
        {Row}
      </List>
    </Paginator>
  );
};
