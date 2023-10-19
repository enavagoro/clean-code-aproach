import express from 'express';
import Koa from 'koa'
import { Mongoose } from 'mongoose';
import { Redis } from 'ioredis';

export type App = express.Application | Koa

export interface Servers {
    express: () => Promise<App>
    koa: () => Promise<App>;
}

export interface GenerateServer {
    (port: string | number): Promise<App>;
}

export type DatabaseConnections = {
    mongoose?: any;
    redis?: any;
};

export type Client = Redis | Mongoose

export interface DatabaseConnection {
    connectToDb: ()=> any
    closeConnection: (client: Client) => Promise<void> | void
}

type FunctionGeneral = (...args: any[]) => any;

export interface Route {
    routePath: string
    method: 'get' | 'post' | 'put' | 'patch' | 'delete'; //HTTP method
    routeHandler: FunctionGeneral
    middlewares?: []
}

export interface Routers {
    express: FunctionGeneral
    koa?: FunctionGeneral
}

export interface Router{
    // webServerHandler: FunctionGeneral
}

// export interface WebServerHandler {
//     send(data: any): void;
//     sendError(error: any): void;
// }