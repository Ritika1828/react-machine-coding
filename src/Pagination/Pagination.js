import { getPaginationArray } from "./getPaginationArray";
import styles from "./index.module.scss"
import cx from "classnames"

export default function CustomPagination({
  count,
  page,
  onChange,
  siblings = 1,
  boundaryCount = 1,
}) {
  function handlePageClick(pageNumber) {
    onChange(pageNumber);
  }
  function renderPageNumbers() {
    return getPaginationArray(page, count, siblings, boundaryCount).map(
      (item) => {
        return (
          <div
            onClick={item === "..." ? null : () => handlePageClick(item)}
            className={cx(styles.btn, {[styles.active]: page === item})}
          >
            {item}
          </div>
        );
      }
    );
  }
  return (
    <div className={styles.conatiner}>
      Page: {page}
      <div className={styles.box}>
        <div
          onClick={page == 1 ? null : () => handlePageClick(page - 1)}
          className={styles.svgBtn}
        //   disabled={page == 1 ? true : false}
        >
          <svg
            class="MuiSvgIcon-root MuiPaginationItem-icon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </svg>
        </div>
        <div className={styles.pageCont}>{renderPageNumbers()}</div>
        <div
          onClick={() => (page < count ? handlePageClick(page + 1) : null)}
          className={styles.svgBtn}
        >
          <svg
            class="MuiSvgIcon-root MuiPaginationItem-icon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
