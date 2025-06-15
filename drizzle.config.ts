import env from "@env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle",
	schema: "./src/db.ts", // Move to separate files once the project scales
	dialect: "sqlite",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
});
