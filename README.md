# Project Title

A [Bedstack](https://github.com/bedtime-coders/bedstack) application.

## Getting Started

1. Clone the repository / Click "Use this template"
2. Find-and-replace "project-name" with your project name
3. Find-and-replace "Project Title" with your project title
4. Remove this section.

## Bedstack

Bedstack is a collection of bleeding-edge technologies to build modern web applications.

Including:

- [Bun](https://bun.sh) - Runtime, package manager
- [ElysiaJS](https://elysiajs.com) - Web Framework, Environment Variables
- [Drizzle](https://orm.drizzle.team) - ORM, Migrations, Seeding
- [Biome](https://biomejs.dev) - Linter, Formatter

## Development

1. Install dependencies

   ```bash
   bun install
   ```

2. Copy `.env.example` to `.env` and fill in the values

   ```bash
   cp .env.example .env
   ```

3. Push the database schema to the database

   ```bash
   bun db:push
   ```

4. Start the server

   ```bash
   bun dev
   ```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more information, including how to set up your development environment.
