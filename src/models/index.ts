import { defineModel } from '@mcpfusion/core';
export const ResponseModel = defineModel('Response', (m) => {
    m.casts({ success: m.boolean('Success flag'), result: m.string('JSON stringified result'), error: m.string('Optional error') });
});
