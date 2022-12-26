import React, { useEffect } from 'react';

import Skeleton from '../components/Card/Skeleton';
import Card from '../components/Card';
import Catalog from '../components/Catalog';
import Sort from '../components/Sort';
import { Pagination } from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct, setIsLoading } from '../redux/slices/productSlice';

const Home = () => {
  const currentPage = useSelector((state) => state.paginationSlice.currentPage);
  const searchValue = useSelector((state) => state.searchSlice.searchValue);
  const selected = useSelector((state) => state.sortSlice.selected);
  const catalogActiveId = useSelector((state) => state.catalogSlice.catalogActiveId);
  const { product, isLoading } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();

  const filterCatalog = catalogActiveId > 0 ? `category=${catalogActiveId}` : '';
  const _sort = selected.sortProperty.replace('-', '');
  const order = selected.sortProperty.includes('-') ? 'asc' : 'desc';
  const search = searchValue ? `&title_like=${searchValue}` : '';

  useEffect(() => {
    dispatch(setIsLoading(true));
    fetch(
      `http://localhost:3001/product?${filterCatalog}&_sort=${_sort}&_order=${order}${search}&_limit=6&_page=${currentPage}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        dispatch(setProduct(json));
        dispatch(setIsLoading(false));
      });
    window.scrollTo(0, 0);
  }, [catalogActiveId, selected, searchValue, currentPage]);
  return (
    <section className="content">
      <div className="container">
        <div className="content__inner">
          <Catalog />
          <div className="content__block">
            <Sort />
            <div className="content__block-product">
              {isLoading
                ? [...new Array(6)].map((_, idx) => <Skeleton key={idx} />)
                : product.map((obj) => <Card key={obj.id} {...obj} />)}
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default Home;
