import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../Redux/actions';

import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.status);

  const handleFilterChange = filter => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleFilterChange('all')}>
        All {filter === 'all' && 'is active'}
      </Button>
      <Button onClick={() => handleFilterChange('active')}>
        Active {filter === 'active' && 'is active'}
      </Button>
      <Button onClick={() => handleFilterChange('completed')}>
        Completed {filter === 'completed' && 'is active'}
      </Button>
    </div>
  );
};
