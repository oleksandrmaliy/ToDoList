import { useSelector } from 'react-redux';

import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const filter = useSelector(state => state.filters.status);
  return (
    <div className={css.wrapper}>
      <Button>All {filter === 'all' && 'is active'}</Button>
      <Button>Active {filter === 'active' && 'is active'}</Button>
      <Button>Completed {filter === 'completed' && 'is active'}</Button>
    </div>
  );
};
