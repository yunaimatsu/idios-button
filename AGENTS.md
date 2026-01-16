# Repository Guidelines

## Project Structure & Module Organization
This repository is currently minimal and contains only `README.md`. As the project grows, keep a simple, predictable layout:
- `src/` for application code.
- `tests/` for automated tests.
- `assets/` for static files (images, data files).

If you add new top-level folders, document them in `README.md` and keep paths short and descriptive.

## Build, Test, and Development Commands
No build or test tooling is configured yet. When you add tooling, update this section with concrete commands such as:
- `npm run build` — compile or bundle the app.
- `npm test` — run the automated test suite.
- `npm run dev` — run a local dev server.

Include any required environment setup (for example, `cp .env.example .env`).

## Coding Style & Naming Conventions
No language or formatter is defined yet. Until then:
- Use 2 spaces for indentation in JSON/YAML; 4 spaces for most code files unless the language community standard dictates otherwise.
- Prefer `kebab-case` for filenames (for example, `user-profile.ts`).
- Prefer `PascalCase` for components or classes, `camelCase` for functions and variables.

If you adopt a formatter or linter (for example, Prettier, ESLint, black), document the exact command and config files here.

## Testing Guidelines
No testing framework is configured. When adding tests:
- Use a clear naming pattern like `*.test.*` or `*_test.*`.
- Keep tests close to the code (`src/` + `tests/`) or mirror the source tree in `tests/`.

Document coverage expectations once established.

## Commit & Pull Request Guidelines
There is no Git history or convention available yet. If you introduce conventions, capture them here. Suggested defaults:
- Commits: short, imperative messages (for example, "Add initial CLI scaffold").
- PRs: include a summary, testing notes, and any relevant screenshots or logs.

## Security & Configuration Tips
Avoid committing secrets. If configuration is needed, provide a `.env.example` template and document required keys.
