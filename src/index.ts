import { db } from "@/db";
import { swagger } from "@elysiajs/swagger";
import env from "@env";
import chalk from "chalk";
import { Elysia, t } from "elysia";
import { description, title } from "../package.json";
import { users } from "./schema";

const app = new Elysia()
	.use(
		swagger({
			documentation: {
				info: { title, version: "", description },
			},
			exclude: ["/"],
		}),
	)
	.get("/", ({ redirect }) => redirect("/swagger"))
	.get("/hello", () => "Hello Bedstack")
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
	.listen(env.PORT);

console.log(
	`Bedstack is up and running on ${chalk.blue(`http://${app.server?.hostname}:${app.server?.port}`)}`,
);
