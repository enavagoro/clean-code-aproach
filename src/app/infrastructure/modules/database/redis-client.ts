import { Redis } from 'ioredis';
import { DatabaseConnection } from '../../../shared/app/types';

 const connectToDb = async () => {
    let client: Redis;

    try {
        const redisOptions = {
            host: process.env.REDIS_HOST || 'localhost',
            port: 6379, // Puerto predeterminado de Redis
        };
    
        client = new Redis(redisOptions);
        console.log('- Connected to Redis: Database connection successfully');
        return client
    } catch (err) {
        console.log(`- Error on Redis Database Connection: ${err}`);
        throw err;
    }
};

const closeConnection = async (client: any): Promise<void> => {
    await client.quit();
    console.log('- Redis connection closed');
};

export const generateRedisClient = (): DatabaseConnection => {
    return { connectToDb, closeConnection };
};
