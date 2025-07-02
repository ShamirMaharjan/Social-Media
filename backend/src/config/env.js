import { config } from "dotenv";

// const envName = 'development';
// config({ path: `.env.${envName}.local` });

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {
    PORT
} = process.env;