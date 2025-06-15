import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { description, title, version } from "../package.json";

const app = new Elysia()
	.use(
		swagger({
			documentation: {
				info: { title, version, description },
			},
			exclude: ["/"],
		}),
	)
	.get("/", ({ redirect }) => redirect("/swagger"))
	.get("/hello", () => "Hello Elysia")
	.listen(3000);

console.log(
	`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
