import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle",
	schema: "./src/db/schema.ts",
	dialect: "sqlite",
	dbCredentials: {
		// biome-ignore lint/style/noNonNullAssertion: it's fine
		url: process.env.DATABASE_URL!,
	},
});
