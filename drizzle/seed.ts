import { exit } from "node:process";
import { parseArgs } from "node:util";
import { db } from "@/db";
import { users } from "@/schema";
import { reset, seed } from "drizzle-seed";
import { env } from "@/plugins/env";

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
}

await seed(db, {
	users,
});

exit(0);
