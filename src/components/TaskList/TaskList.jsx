import { useSelector } from 'react-redux';

import { Task } from '../Task/Task';
import css from './TaskList.module.css';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case 'active':
      return tasks.filter(tasks => !tasks.completed);
    case 'completed':
      return tasks.filter(tasks => tasks.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks.items);
  const statusFilter = useSelector(state => state.filters.status);

  const vilibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {vilibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
