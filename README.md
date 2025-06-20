<div align="center">
    <h1>
        Project Title
    </h1>
    <a href="https://bun.sh/"><img src="https://img.shields.io/badge/Bun-14151a?logo=bun&logoColor=fbf0df" alt="bun" /></a>
    <a href="https://elysiajs.com/"><img src="https://custom-icon-badges.demolab.com/badge/ElysiaJS-0f172b.svg?logo=elysia" alt="elysia" /></a>
    <a href="https://drizzle.team/"><img src="https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=000" alt="drizzle" /></a>
    <a href="https://biomejs.dev/"><img src="https://img.shields.io/badge/Biome-24272f?logo=biome&logoColor=f6f6f9" alt="biome" /></a>
    <a href="https://scalar.com/"><img src="https://img.shields.io/badge/Scalar-080808?logo=scalar&logoColor=e7e7e7" alt="scalar" /></a>
    <a href="https://github.com/repo-author/repo-name/blob/main/LICENSE"><img src="https://custom-icon-badges.demolab.com/github/license/repo-author/repo-name?label=License&color=blue&logo=law" alt="license" /></a>
    <p>A <a href="https://github.com/bedtime-coders/bedstack">Bedstack</a> application</p>
</div>

## Getting Started

1. Clone the repository / Click "Use this template"
2. Find-and-replace "repo-author" with the repository author (can be a username or an organization) 
3. Find-and-replace "repo-name" with the repository name 
4. Find-and-replace "project-name" with your project name
5. Find-and-replace "Project Title" with your project title
6. Edit `LICENSE` and add name + year
6. Remove this section

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
