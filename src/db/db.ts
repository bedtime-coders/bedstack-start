import { drizzle } from "drizzle-orm/bun-sqlite";

// biome-ignore lint/style/noNonNullAssertion: it's fine
export const db = drizzle(process.env.DATABASE_URL!);
