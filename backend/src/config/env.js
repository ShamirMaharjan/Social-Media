import { config } from "dotenv";

// const envName = 'development';
// config({ path: `.env.${envName}.local` });

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {
    PORT,
    NODE_ENV,
    MONGO_URI,
    CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY,
    ARCJET_KEY,
    ARCJET_ENV,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET
} = process.env;