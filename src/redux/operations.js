import axios from 'axios';
import { fetchInProgress, fetchSuccess, fetchError } from './tasksTwoSlice';

// Встановлюємо базову URL-адресу
// для всіх запитів axios
axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

// Оголошення асинхронної операції
// fetchTasks для отримання даних
export const fetchTasks = () => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchInProgress());
    // HTTP-запит
    const response = await axios.get('/tasks');
    // Обробка даних
    dispatch(fetchSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchError(e.message));
  }
};
