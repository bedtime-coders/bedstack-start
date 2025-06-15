import env from "@env";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const db = drizzle(env.DATABASE_URL);

// Once the project scales, move the schemas to separate files

export const users = sqliteTable("users", {
	id: integer().primaryKey(),
	name: text().notNull(),
});
