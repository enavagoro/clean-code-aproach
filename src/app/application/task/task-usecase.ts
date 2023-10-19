import { Task } from "../../domain/task/task-domain"
import { TaskRepository } from "../../domain/task/task-repository"

export const makeInsertTask = (task: Task, taskRepository: TaskRepository): Promise<Task | Error> => {
    return taskRepository.insertTask(task)
}

export const makeUpdateTask = (task: Task, taskRepository: TaskRepository): Promise<Task | Error> => {
    return taskRepository.updateTask(task.id, task)
}

export const makeGetTasks = (taskRepository: TaskRepository): Promise<Task[] | Error> => {
    return taskRepository.getTasks()
}