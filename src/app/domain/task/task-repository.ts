import { Task } from './task-domain'

export interface TaskRepository{
	getTasks() : Promise<Task[] | Error>;
	insertTask(task: Task): Promise<Task | Error>;
	updateTask(id: string, task: Task): Promise<Task | Error>;
}