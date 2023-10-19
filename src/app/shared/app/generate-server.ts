import { Environment } from "../../../utils/config/types";
import { generateExpressServer } from '../../infrastructure/modules/server/express/express'
import { generateKoaServer } from '../../infrastructure/modules/server/koa/koa'

import { Servers } from "./types";

export const startServer = (environment: Environment) => {
    const servers : Servers = {
        express: () => generateExpressServer(environment.port),
        koa: () => generateKoaServer(environment.port)
    }

    const server: keyof Servers = environment.webServerName as keyof Servers
    const selectedServer = servers[server]
    return selectedServer
}