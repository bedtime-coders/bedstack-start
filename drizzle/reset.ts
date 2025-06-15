import { db } from "@/db";
import { users } from "@/db/schema";
import { reset } from "drizzle-seed";

await reset(db, {
	users,
});
