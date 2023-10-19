import { Environment } from "../../../utils/config/types";
import { generateMongooseClient } from "../../infrastructure/modules/database/mongoose-client";
import { generateRedisClient } from "../../infrastructure/modules/database/redis-client";
import { DatabaseConnections } from "./types";

export const startDatabases = (environment: Environment) => {
    const databaseNames = environment.databases.split('|');
    const databaseConnections: DatabaseConnections = {};

    databaseNames.forEach((databaseName) => {
        switch (databaseName) {
            case 'mongoose':
                databaseConnections[databaseName] = generateMongooseClient();
                break;
            case 'redis':
                databaseConnections[databaseName] = generateRedisClient();
                break;
            default:
               throw new Error(`Database not found`);
        }
    });

    return databaseConnections;
};