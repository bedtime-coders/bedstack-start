import { db } from "@/db";
import { users } from "@/schema";
import { reset } from "drizzle-seed";

console.log("🔄 Resetting database...");
await reset(db, {
	users,
});
console.log("✅ Database reset successfully.");
