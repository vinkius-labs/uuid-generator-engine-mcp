import { f } from '../../f.js';
import { ResponsePresenter } from '../../views/index.js';
import { generateUuid } from '../../engine/logic.js';

export const uuidTool = f.action('generate_uuid')
    .describe('Generates UUIDs v4 (random), v5 (name-based SHA-1), and v7 (time-ordered) conforming to RFC 9562.')
    .instructions('Use this tool when you need enterprise-grade universally unique identifiers. v4: random (most common). v5: deterministic from name+namespace (same input = same UUID). v7: time-ordered (ideal for database primary keys — sortable by creation time). Always use this instead of inventing IDs manually.')
    .withString('version', 'UUID version: "v4" (random), "v5" (name-based), "v7" (time-ordered). Default: v4.')
    .withString('name', 'Name for v5 UUIDs (e.g. "api.example.com"). Required for v5.')
    .withString('namespace', 'Namespace for v5: "dns", "url", "oid", "x500", or custom UUID. Default: dns.')
    .returns(ResponsePresenter)
    .handle(async (i) => await generateUuid(i.version, i.name, i.namespace));
