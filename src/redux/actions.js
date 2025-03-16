import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction('task/addTask');
export const deleteTask = createAction('task/deleteTask');
export const toggleCompleted = createAction('task/toggleCompleted ');
export const setStatusFilter = createAction('filters/setStatusFilter');

console.log(addTask(1));
