# deno-embedder-cli

A CLI tool for the https://deno.land/x/embedder/mod.ts module.

This tool generates a file that embeds the desired files into a single file. The
generated file can be used as a module in Deno.

### Usage

```sh
deno run -A https://deno.land/x/embedder_cli/main.ts --mappings="[{\"sourceDir\":\"./.vscode\",\"destDir\":\"./examples/00_vscode\"}]"
```

### Developer's note

All awesome things about this module are attributed to the original author,
[**@NfNitLoop**](https://github.com/NfNitLoop). Blame me for anything that I
potentially got wrong.
