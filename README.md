# daveyonkers

A full-screen video landing page built with SvelteKit and Bun.

## Development

```sh
bun install
bun run dev
```

## Checks and production build

```sh
bun run check
bun run lint
bun run build
```

The GitHub Actions workflow builds the static site and deploys the generated `build/` directory to GitHub Pages whenever `main` is updated.
