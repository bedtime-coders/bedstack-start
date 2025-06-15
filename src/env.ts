import ark, { port } from "ark.env";

export const env = ark.env({
	DATABASE_URL: "string",
	PORT: port.default("3000"),
});
