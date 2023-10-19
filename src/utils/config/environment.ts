import { Environment } from './types'
import * as dotenv from 'dotenv';
dotenv.config();

export const environment: Environment = {
    port: process.env.PORT || 3000,
    webServerName: process.env.WEB_SERVER_NAME || 'express',
    databases: process.env.DATABASES || '',
    mongooseUrl: process.env.MONGOOSE_URL || ''
}