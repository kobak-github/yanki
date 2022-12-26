import React from 'react';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <h1 className="not-found__title1">404</h1>
        <h3 className="not-found__title3">Ничего не найдено</h3>
        <p className="not-found__text">
          к сожалению данная страница отсутствует в нашем интернет-магазине
        </p>
      </div>
    </div>
  );
};

export default NotFound;
