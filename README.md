# Tenant plugin repository

This repository contains the external, self-hosted plugin and customization workspace for the tenant inside the main Zen ERP application. Built with **Vite** in library mode, this project compiles custom functionality—ranging from full page overrides and UI components to custom business logic and utilities—into a lightweight, native ES module that is dynamically injected at runtime.

## Architecture overview

Unlike traditional monolithic apps, this architecture uses a **registry pattern** to decouple tenant-specific code from the core Zen ERP codebase:

1. **The guest (this repository):** Bundles custom tenant logic into a single output file (`dist/plugin.js`).
2. **The host (Zen ERP):** Fetches the plugin over the network natively and registers its components, pages, and functions into a runtime registry.

## Project Structure

```text
├── src/
│   ├── components/       <-- UI snippets, custom buttons, table overrides
│   ├── pages/            <-- Full page overrides (e.g., custom Quote view)
│   ├── functions/        <-- Pure JS functions, business logic, validation
│   └── index.jsx          <-- The Universal Manifest Hub (entry point)
└── package.json          <-- Project configuration and dependencies
```

## Getting Started

### Prerequisites

* Node.js (latest LTS recommended)
* pnpm

### Installation

Clone the repository and install dependencies:

```bash
pnpm install
```

### Development mode

Start the local development server (sandboxed on unprivileged port `48291`):

```bash
pnpm dev
```

Open `http://localhost:48291` in your browser to view your local development workspace.

## Building for production

To compile the project into a single, optimized ES Module ready for static hosting (CDN, AWS S3, Cloudflare Pages, etc.):

```bash
pnpm build
```

To preview the production build locally:

```bash
pnpm preview
```

## Exposing customizations (`src/index.jsx`)

The entry point acts as the universal manifest hub. Everything exported here becomes available to the main Zen ERP application.

## License

Private repository. All rights reserved by Zen ERP.