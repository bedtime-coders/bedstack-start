import { db } from "@/db";
import { env, envPlugin } from "@/env";
import { swagger } from "@elysiajs/swagger";
import chalk from "chalk";
import { Elysia, t } from "elysia";
import { description, title } from "../package.json";
import { users } from "./schema";

console.log(chalk.gray("Starting Bedstack"));

new Elysia()
	.use(envPlugin)
	.use(
		swagger({
			documentation: {
				info: { title, version: "", description },
			},
			exclude: ["/"],
		}),
	)
	.get("/", ({ redirect }) => redirect("/swagger"))
	.get("/hello", ({ env }) => `Hello Bedstack on port ${env.PORT}`)
	.post(
		"/users",
		async ({ body }) => {
			const user = await db.insert(users).values(body).returning();
			return user;
		},
		{
			body: t.Object({
				name: t.String({ minLength: 2, examples: ["John Doe"] }),
			}),
		},
	)
	.listen(env.PORT, ({ hostname, port }) => {
		console.log(
			`Bedstack is up and running on ${chalk.blue(`http://${hostname}:${port}`)}`,
		);
	});
