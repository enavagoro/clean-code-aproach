import express from 'express';
import cors from 'cors';
import { App, GenerateServer } from '../../../../shared/app/types';

export const generateExpressServer: GenerateServer = async (port: string | number) => {
    const app: App = initializeServiceExpress()
    initializeMiddlewares(app)
    initializePort(app, port)
    return app
}

const initializeServiceExpress = (): express.Application => {
    const app: express.Application = express();
    return app;   
}

const initializeMiddlewares = (app: express.Application) => {
    app.use(express.json());
    app.use(cors());
}

const initializePort = (app: express.Application, port: string | number) => {
    app.set('port', port);
    app.listen(port , ()=>{
        console.log(`Server running on port: ${port} | WebServer: Express`);
    });
}
