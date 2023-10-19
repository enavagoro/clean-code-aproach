import { createApp } from './app/index'
import { environment } from './utils/config/environment'

const init = async () => {
    try{
        const app = await createApp()
        const server = await app.startServer(environment)()
        const databases = app.startDatabases(environment)
        app.startRoutes(server, environment, databases)
    } catch (err) {
        console.log(`- error on running app: ${err}`)
    }    
}

init()