import { FC, useMemo } from 'react';
import { UrlObject } from 'url';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import { MdChevronLeft, MdChevronRight, MdOutlineMoreHoriz } from 'react-icons/md';
import styles from './Pagination.module.scss';

interface PaginationProps {
  total: number;
  count: number;
}

const Pagination: FC<PaginationProps> = ({ total, count }) => {
  const router = useRouter();
  const page = useMemo(() => Number(router.query.page) || 1, [router.query.page]);

  const pageCount = useMemo(() => Math.ceil(total / count), [total, count]);

  const onPageChange = (e: { selected: number }) => {
    const page = e.selected + 1;
    const query: UrlObject['query'] = { ...router.query, page };
    if (page === 1) delete query.page;
    router.push({ query }, {}, { scroll: false, shallow: true });
  };

  return (
    <ReactPaginate
      className={styles.pagination}
      pageClassName={styles.page}
      nextClassName={styles.next}
      previousClassName={styles.prev}
      activeClassName={styles.active}
      disabledClassName={styles.disabled}
      breakLabel={<MdOutlineMoreHoriz />}
      nextLabel={<MdChevronRight />}
      previousLabel={<MdChevronLeft />}
      initialPage={page - 1}
      pageCount={pageCount}
      renderOnZeroPageCount={() => null}
      onPageChange={onPageChange}
    />
  );
};

export default Pagination;
