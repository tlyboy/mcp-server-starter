# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an MCP (Model Context Protocol) server starter template. It provides a minimal setup for building MCP servers that can be used with Claude and other MCP-compatible clients.

## Commands

```bash
# Install dependencies
pnpm install

# Build the project (compiles TypeScript to build/)
pnpm build
```

## Architecture

- **src/index.ts**: Main entry point that creates and configures the MCP server
  - Uses `McpServer` from `@modelcontextprotocol/sdk` for server creation
  - Uses `StdioServerTransport` for stdio-based communication
  - Tools are defined using `server.tool()` with Zod schemas for parameter validation
  - Server runs on stdio (not HTTP)

## Code Style

- No semicolons
- Single quotes
- Prettier for formatting (auto-format on save in VSCode)

## Requirements

- Node.js >= 22
- pnpm (package manager)
