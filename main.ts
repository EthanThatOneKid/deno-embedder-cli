// Example usage:
// deno run -A main.ts --mappings="[{\"sourceDir\":\"./.vscode\",\"destDir\":\"./examples/00_vscode\"}]"
//

import * as embed from "https://deno.land/x/embedder@v1.0.1/mod.ts";
import * as flags from "https://deno.land/std@0.185.0/flags/mod.ts";

/**
 * Reference: https://deno.land/x/embedder
 */
await embed.main({
  args: ["build"],
  options: {
    importMeta: import.meta,
    mappings: parseMappingsFromFlags(Deno.args),
  },
});

/**
 * parseMappingsFromFlags parses the mappings from the command line flags.
 */
function parseMappingsFromFlags(args: string[]): embed.Mapping[] {
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

/**
 * FLAG_MAPPINGS is the name of the flag that specifies the mappings.
 */
const FLAG_MAPPINGS = "mappings";
