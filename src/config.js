import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
// console.log(PORT);

export const STRIPE_PRIVATE_KEY = process.env.STRIPE_PRIVATE_KEY; 
console.log(STRIPE_PRIVATE_KEY);
