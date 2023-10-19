import { startServer } from './shared/app/generate-server'
import { startDatabases } from './shared/app/generate-dbs'
import { startRoutes} from './shared/app/generate-routes'

export const createApp = async () => {
    const app = {
        startDatabases,
        startServer,
        startRoutes
    }
    return app
}