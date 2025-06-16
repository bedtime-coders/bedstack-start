import { exit } from "node:process";
import { parseArgs } from "node:util";
import { db } from "@/db";
import { env } from "@/env";
import { users } from "@/schema";
import { reset, seed } from "drizzle-seed";

const { values } = parseArgs({
	args: Bun.argv,
	options: {
		reset: { type: "boolean", default: false },
	},
	strict: true,
	allowPositionals: true,
});

if (values.reset) {
	if (env.NODE_ENV === "production") {
		console.error(
			"❌ Database reset is only allowed in development or test environments.",
		);
		exit(1);
	}
	console.log("🔄 Resetting database...");
	await reset(db, {
		users,
	});
	console.log("✅ Database reset successfully.");
}

console.log("🌱 Seeding database...");
await seed(db, {
	users,
});
console.log("✅ Database seeded successfully.");

exit(0);
