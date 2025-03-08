import React from "react";
import styles from "./Paginator.module.css";

interface PaginatorProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  children: React.ReactNode;
}

const Paginator: React.FC<PaginatorProps> = ({
  page,
  totalPages,
  onPageChange,
  children,
}) => {
  return (
    <div>
      {children}
      <div className={styles.paginator}>
        <button onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
          ◀ Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default Paginator;
