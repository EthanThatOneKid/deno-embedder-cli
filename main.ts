// Example usage:
// deno run -A main.ts --mappings="[{\"sourceDir\":\"./.vscode\",\"destDir\":\"./examples/00_vscode\"}]"
//

import * as embed from "https://deno.land/x/embedder@v1.0.1/mod.ts";
import * as flags from "https://deno.land/std@0.185.0/flags/mod.ts";

/**
 * FLAG_MAPPINGS is the command line flag for mappings.
 */
export const FLAG_MAPPINGS = "mappings";

/**
 * doEmbed embeds the files.
 *
 * Reference: https://deno.land/x/embedder
 */
export async function doEmbed() {
  await embed.main({
    args: ["build"],
    options: {
      importMeta: import.meta,
      mappings: parseMappingsFromFlags(Deno.args),
    },
  });
}

/**
 * parseMappingsFromFlags parses the mappings from the command line flags.
 */
export function parseMappingsFromFlags(args: string[]): embed.Mapping[] {
  const { mappings } = flags.parse(args, {
    string: [FLAG_MAPPINGS],
    alias: { [FLAG_MAPPINGS]: "m" },
    default: { [FLAG_MAPPINGS]: "[]" },
  });

  /**
   * TODO: Add support for `embed.Mapping['plugin']`.
   */
  return JSON.parse(mappings);
}
