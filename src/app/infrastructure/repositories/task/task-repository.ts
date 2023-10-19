import { TaskRepository } from "../../../domain/task/task-repository"
import { insertTaskImplementation, updateTaskImplementation, getTasksImplementation } from "./mongoose/task-implentation"

export const taskRepository: TaskRepository = {
    insertTask: insertTaskImplementation,
    updateTask: updateTaskImplementation,
    getTasks: getTasksImplementation
}