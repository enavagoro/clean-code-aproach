import express, { Router } from 'express'
import { Route } from '../../../../shared/app/types';

export const generateExpressRoutes = (routes: Route[], server: express.Application) => {
    const router = Router();
    for (let route of routes) {
        const { routePath, routeHandler, middlewares, method } = route;

        if (middlewares) {
            router[method](routePath, ...middlewares, routeHandler);
        } else {
            router[method](routePath, routeHandler);
        }
    }
    server.use(router);
}