# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a $mol framework application (bog_bzrl_app) with Tauri support for web, desktop (Windows, macOS, Linux), and mobile (Android) builds.

## Build System

The project uses the MAM (Modularity Aggregation Multiplier) build system from hyoo-ru. Building is done via GitHub Actions using `hyoo-ru/mam_build@master2`.

**Local development requires the MAM monorepo environment.** This package (`bog/bzrl`) is designed to be nested within the MAM structure at path `/bog/bzrl/`.

## Architecture

### $mol Framework Patterns

- **View definitions**: `.view.tree` files define component hierarchy using $mol's declarative DSL
- **View logic**: `.view.ts` files contain TypeScript class implementations that extend generated base classes
- **View styles**: `.view.css.ts` files use `$mol_style_define()` for type-safe CSS
- **Localization**: `.locale=XX.json` files for i18n (e.g., `app.locale=ru.json`)
- **Meta configuration**: `.meta.tree` files define module dependencies and deployment paths

### Component Structure

Components follow the naming convention `$bog_bzrl_[component]`:

- `$bog_bzrl_app` - Main application component extending `$mol_page`
- `$bog_bzrl_app_profile` - User profile popup component

### Generated Output

The `app/-/` directory contains build artifacts (generated `.js`, `.d.ts`, `.css`, `.mjs` files). Do not edit files in this directory directly.

### View Tree Syntax

The `.view.tree` DSL uses:

- `$ComponentName $ParentClass` - Component declaration with inheritance
- `<=` prefix - Property binding (e.g., `<= Theme $bog_theme_auto`)
- `/` - Array of child elements
- `@` prefix - Localization key (e.g., `title @ \Welcome to Bzrl!`)
- `\` prefix - String literal
- `?` suffix - Optional/mutable property (e.g., `opened? false`)

### Namespace Pattern

All code uses the `$.$` and `$.$$` namespace pattern:

- `$.$` contains generated base classes
- `$.$$` contains user implementations that extend base classes
