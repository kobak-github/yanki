import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenPopup, setSelected } from '../../redux/slices/sortSlice';
const sortList = [
  { id: 0, name: 'умолчанию', sortProperty: '-id' },
  { id: 1, name: 'убыванию наименования', sortProperty: 'title' },
  { id: 2, name: 'возростанию наименования', sortProperty: '-title' },
  { id: 3, name: 'убыванию цены', sortProperty: 'price' },
  { id: 4, name: 'возростанию цены', sortProperty: '-price' },
];

const Sort = () => {
  const { openPopup, selected } = useSelector((state) => state.sortSlice);
  const dispatch = useDispatch();
  const onClickSortList = (idx) => {
    dispatch(setSelected(idx));
    dispatch(setOpenPopup(false));
  };
  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 3.88906L8.88906 -4.85606e-08L10 1.11094L5 6.11093L-4.85606e-08 1.11094L1.11094 -3.88553e-07L5 3.88906Z"
            fill="#E0BEA2"
          />
        </svg>
        <p className="sort__title">Сортировка по:</p>
        <span onClick={() => dispatch(setOpenPopup(!openPopup))}>{selected.name}</span>
      </div>
      {openPopup && (
        <div className="sort__popup">
          <ul className="sort__popup-lists">
            {sortList.map((obj) => {
              return (
                <li
                  className={
                    selected.sortProperty === obj.sortProperty
                      ? 'sort__popup-list active'
                      : 'sort__popup-list'
                  }
                  key={obj.id}
                  onClick={() => onClickSortList(obj)}>
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
