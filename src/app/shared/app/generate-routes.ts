import { Environment } from "../../../utils/config/types";
import { App, Route, Routers, DatabaseConnections} from "./types";
import { generateExpressRoutes } from "../../infrastructure/modules/server/express/express-routes";
import express from "express";

import taskRoute from "../../infrastructure/routes/task/task-route";

export const startRoutes = (server: App, environment: Environment, databases: DatabaseConnections) => {
    const routes: Route[] = [taskRoute.insertTaskRoute(databases)]
    const routers: Routers = {
        express: () => generateExpressRoutes(routes, server as express.Application),
    }
    
    const selectedServer: keyof Routers = environment.webServerName as keyof Routers
    const selectedRouter = routers[selectedServer]
    selectedRouter?.()
}
