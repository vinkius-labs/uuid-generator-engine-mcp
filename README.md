# UUID Generator Engine MCP Server

A critical infrastructure Model Context Protocol (MCP) server that provides AI agents with the ability to generate cryptographically secure, mathematically valid Universally Unique Identifiers (UUIDs) across multiple protocol versions (v4, v5, v7).

[![Available on Vinkius Edge](https://img.shields.io/badge/Run%20on-Vinkius%20Edge-blue?style=for-the-badge)](https://vinkius.com/mcp/uuid-generator-engine)
[![Docker Pulls](https://img.shields.io/docker/pulls/vinkius/uuid-generator-engine-mcp?style=for-the-badge&logo=docker&color=2496ed)](https://hub.docker.com/r/vinkius/uuid-generator-engine-mcp)

## The Danger of AI-Generated Identifiers

Large Language Models should **never** generate database identifiers. When an LLM is prompted to "create a unique ID," it hallucinates a string that *looks* like a UUID (e.g., `123e4567-e89b-12d3-a456-426614174000`). This string is statistically likely to be generated again in identical contexts, completely destroying primary key uniqueness and causing catastrophic database collisions.

### The Cryptographic Guarantee
The **UUID Generator Engine MCP** securely delegates identifier creation to the host system's cryptographic random number generator (CSPRNG). By calling this server, agents receive mathematically guaranteed, RFC 4122/9562 compliant UUIDs. This is an absolute necessity for agents writing SQL insertion scripts, API payloads, or building infrastructure as code.

---

## Core Capabilities

* `generate_uuid`
  * **Function**: Generates compliant UUIDs. Supports standard random v4, namespace-based v5, and the modern time-ordered v7 for database optimization.
  * **Output**: A strictly formatted UUID string.
  * **Use Case**: Database initialization, distributed system tracing, and test payload generation.

## Run on Vinkius Edge (Free Edge Hosting)

Vinkius provides **free, highly available edge hosting** using secure V8 isolates. Deploying to the Vinkius Edge is the fastest way to make this MCP server accessible to any AI agent anywhere, with sub-millisecond response times and zero maintenance.

1. Clone this repository
2. Run the deployment command:

```bash
npx mcpfusion deploy
```

That's it. Your MCP server is now live, secure, and ready to be connected to your agents.

👉 **[Access the UUID Generator MCP on Vinkius](https://vinkius.com/mcp/uuid-generator-engine)**

## Local Development

Constructed using [MCP Fusion](https://www.npmjs.com/package/@mcpfusion/core) for reliable, strictly typed execution.

```bash
npm install
npm run dev
```
