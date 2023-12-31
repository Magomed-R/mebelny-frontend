import React from 'react';
import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <div className='notFound'>
      <p>
        Такая страница не найдена.
      </p>
      <Link to='/' >Вернуться на главную</Link>
    </div>
  )
}