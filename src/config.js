import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;

export const STRIPE_PRIVATE_KEY = process.env.STRIPE_PRIVATE_KEY;