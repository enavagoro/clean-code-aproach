import { DatabaseConnection, DatabaseConnections, Route } from "../../../shared/app/types"
import { insertTaskController } from "../../controllers/task/task-controller"
import { taskRepository } from "../../repositories/task/task-repository"

const prefix = '/task' 

const insertTaskRoute = (databases: DatabaseConnections) => {
    const subfix = '/insert'
    const routePath = prefix + subfix
    const route: Route = {
        routePath,
        method: 'post',
        middlewares: [],
        routeHandler: () => insertTaskController(taskRepository, databases.mongoose)
    }
    return route
}

export default {
    insertTaskRoute
}