import { Task } from "../../../domain/task/task-domain"
import { TaskRepository } from "../../../domain/task/task-repository"
import { makeInsertTask } from "../../../application/task/task-usecase"
import { DatabaseConnection } from "../../../shared/app/types"

export const insertTaskController = async (
    taskRepository: TaskRepository, 
    database: DatabaseConnection) => {

    const task: Task = {id: '1', name:'Do this', status: false, isCompleted: false } 

    try{
        const databaseClient = await database.connectToDb()
        const response = await makeInsertTask(task, taskRepository)
        database.closeConnection(databaseClient)
    } catch (err){
        
    }
}