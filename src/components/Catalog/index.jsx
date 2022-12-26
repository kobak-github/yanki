import { useDispatch, useSelector } from 'react-redux';
import { setCatalogActiveId } from '../../redux/slices/catalogSlice';

const catalog = [
  'Все',
  'Куртка',
  'Пальто',
  'Шубы',
  'Парка',
  'Тренчи',
  'Пуховики и жилеты',
  'Костюмы',
  'Жакеты',
  'Платья',
  'Рубашки и блузы',
  'Юбки',
  'Футболки и топы',
  'Аксессуары',
];
const Catalog = () => {
  const dispatch = useDispatch();
  const catalogActiveId = useSelector((state) => state.catalogSlice.catalogActiveId);
  return (
    <aside className="content__catalog">
      <h3 className="content__catalog-title">Каталог</h3>
      <ul className="content__catalog-lists">
        {catalog.map((prod, i) => {
          return (
            <li
              className={
                catalogActiveId === i
                  ? 'content__catalog-list content__catalog-list--active'
                  : 'content__catalog-list'
              }
              onClick={() => dispatch(setCatalogActiveId(i))}
              key={i}>
              <a href="#" className="content__catalog-link">
                {prod}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Catalog;
