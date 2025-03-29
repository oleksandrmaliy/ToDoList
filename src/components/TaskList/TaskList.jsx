import { useSelector } from 'react-redux';
import { selectVisibleTasks } from '../../Redux/tasksSlice';

import { Task } from '../Task/Task';
import css from './TaskList.module.css';

// const getVisibleTasks = (tasks, statusFilter) => {
//   switch (statusFilter) {
//     case 'active':
//       return tasks.filter(task => !task.completed);
//     case 'completed':
//       return tasks.filter(task => task.completed);
//     default:
//       return tasks;
//   }
// };

export const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
