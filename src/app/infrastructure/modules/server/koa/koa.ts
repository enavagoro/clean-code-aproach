import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import { App, GenerateServer } from '../../../../shared/app/types';

export const generateKoaServer: GenerateServer = async (port: string | number) => {
    const app: App = initializeServiceKoa();
    initializeMiddlewares(app);
    initializePort(app, port);
    return app;
}

const initializeServiceKoa = (): Koa => {
    const app: Koa = new Koa();
    return app;
}

const initializeMiddlewares = (app: Koa) => {
    app.use(cors());
    app.use(bodyParser());
}

const initializePort = (app: Koa, port: string | number) => {
    app.listen(port, () => {
        console.log(`Server running on port: ${port} | WebServer: Koa`);
    });
}
