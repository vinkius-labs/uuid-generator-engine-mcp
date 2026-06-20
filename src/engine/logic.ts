import { v4 as uuidv4, v5 as uuidv5, v7 as uuidv7, validate, version } from 'uuid';

const NAMESPACES: Record<string, string> = { dns: '6ba7b810-9dad-11d1-80b4-00c04fd430c8', url: '6ba7b811-9dad-11d1-80b4-00c04fd430c8', oid: '6ba7b812-9dad-11d1-80b4-00c04fd430c8', x500: '6ba7b814-9dad-11d1-80b4-00c04fd430c8' };

export async function generateUuid(versionNum: string, name: string, namespace: string) {
    try {
        const ver = versionNum || 'v4';
        let id: string;

        if (ver === 'v4') {
            id = uuidv4();
        } else if (ver === 'v5') {
            if (!name) throw new Error('v5 requires a "name" parameter.');
            const ns = NAMESPACES[namespace?.toLowerCase()] || namespace || NAMESPACES.dns;
            id = uuidv5(name, ns);
        } else if (ver === 'v7') {
            id = uuidv7();
        } else {
            throw new Error(`Unsupported version "${ver}". Use v4, v5, or v7.`);
        }

        return { success: true, result: JSON.stringify({ uuid: id, version: ver, isValid: validate(id), rfc: 'RFC 9562' }), error: '' };
    } catch (e: any) {
        return { success: false, result: '', error: e.message };
    }
}
