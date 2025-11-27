import {neon} from '@neondatabase/serverless';

import dotenv from 'dotenv';

dotenv.config();

//Create a SQL connection using our DB URL
export const sql = neon(process.env.DATABASE_URL);