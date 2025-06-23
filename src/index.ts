import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'

const server = new McpServer({
  name: 'mcp-starter',
  version: '1.0.0',
})

server.tool(
  'hello',
  'A simple hello world tool',
  {
    name: z.string().optional(),
  },
  ({ name }) => {
    return {
      content: [
        {
          type: 'text',
          text: `Hello, ${name ?? 'world'}!`,
        },
      ],
    }
  },
)

async function main() {
  const transport = new StdioServerTransport()
  await server.connect(transport)
  console.error('Hello MCP Server running on stdio')
}

main().catch((error) => {
  console.error('Fatal error in main():', error)
  process.exit(1)
})
