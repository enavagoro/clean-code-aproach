import { Task } from "../../../../domain/task/task-domain";
import { TaskRepository } from "../../../../domain/task/task-repository";
import { taskModel } from "./task-schema";
 
export const insertTaskImplementation: TaskRepository['insertTask'] = async (taskData: Task): Promise<Task | Error> => {
    const task = new taskModel(taskData)
    console.log('?:', task)
    const savedTask = await task.save()
    console.log('savedTask:', savedTask)

    return savedTask
}

export const updateTaskImplementation: TaskRepository['updateTask'] = async (id: string, dataToUpdate: Task): Promise<Task | Error> => {
    const updatedTask = await taskModel.findByIdAndUpdate(id, dataToUpdate, { new: true })
    return updatedTask as Task
}

export const getTasksImplementation: TaskRepository['getTasks'] = async (): Promise<Task[] | Error> => {
    const tasks = await taskModel.find({})
    return tasks
}