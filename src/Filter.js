import { useEffect } from "react";
import styles from "./Filter.module.css";

function Filter({ popular, setFiltered, activeGenre, setActiveGenre }) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre, popular, setFiltered]);
  return (
    <div className={styles["filter-container"]}>
      <button
        onClick={() => setActiveGenre(0)}
        className={activeGenre === 0 ? `${styles.active}` : ""}
      >
        All
      </button>
      <button
        onClick={() => setActiveGenre(35)}
        className={activeGenre === 35 ? `${styles.active}` : ""}
      >
        Comedy
      </button>
      <button
        onClick={() => setActiveGenre(28)}
        className={activeGenre === 28 ? `${styles.active}` : ""}
      >
        Actions
      </button>
    </div>
  );
}

export default Filter;
