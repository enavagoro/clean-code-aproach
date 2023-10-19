import mongoose, { ConnectOptions } from 'mongoose'
import { DatabaseConnection } from '../../../shared/app/types'

const connectWithRetry = async (count = 0) => {
    const connectOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

    const connectionUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/wea'

    try {
        const connection = await mongoose.connect(connectionUrl, connectOptions as ConnectOptions)
        console.log(`- Mongoose Connection: Database connection succesfully`);
        return connection
    } catch (err) {
        console.log(`- Error on Mongoose DatabaseConnection: ${err}`);
        if (count < 3) {
            console.log(`- Retry connection: ${count}`);
            const retryInterval = 5000; // 5 segundos
            setTimeout(() => connectWithRetry(count + 1), retryInterval);
        }
    }
}

const connectToDb = () => {
    return connectWithRetry();
}

const closeConnection = async (connection: any) => {
    try {
        await connection.disconnect();
        console.log(`- Mongoose connection closed`);
    } catch (error) {
        console.error('Error on close db:', error);
    }
};

export const generateMongooseClient = (): DatabaseConnection => {
    return { connectToDb, closeConnection };
};