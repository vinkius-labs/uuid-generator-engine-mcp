import { createPresenter, ui } from '@vurb/core';
import { ResponseModel } from '../models/index.js';
export const ResponsePresenter = createPresenter('Response').schema(ResponseModel as any).rules(['Display result.'])
  .ui((data: any) => {
      if (!data.success) return [ui.markdown(`**Error:** ${data.error}` as string)];
      return [ui.markdown(`**Result:**\n\`\`\`json\n${data.result}\n\`\`\`` as string)];
  });
