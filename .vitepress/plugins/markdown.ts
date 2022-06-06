import path from 'path'

import type { Plugin } from 'vite'

type Append = Record<'headers' | 'scriptSetups', string[]>

export function MarkdownTransform(): Plugin {
  return {
    name: 'element-plus-md-transform',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.md')) return

      const componentId = path.basename(id, '.md')
      const append: Append = {
        headers: [],
        scriptSetups: [
          `const demos = import.meta.globEager('../examples/${componentId}/*.vue')`,
        ],
      }

      code = transformVpScriptSetup(code, append)

      return combineMarkdown(
        code,
        [combineScriptSetup(append.scriptSetups), ...append.headers]
      )
    },
  }
}

const combineScriptSetup = (codes: string[]) =>
  `\n<script setup>
${codes.join('\n')}
</script>
`

const combineMarkdown = (
  code: string,
  headers: string[]
) => {
  const frontmatterEnds = code.indexOf("---", 2) + 4
  const firstSubheader = code.search(/\n## \w/)
  const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader
  if (headers.length > 0)
    code =
      code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
  code

  return `${code}\n`
}

const vpScriptSetupRE = /<vp-script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/vp-script>/

const transformVpScriptSetup = (code: string, append: Append) => {
  const matches = code.match(vpScriptSetupRE)
  if (matches) code = code.replace(matches[0], '')
  const scriptSetup = matches?.[3] ?? ''
  if (scriptSetup) append.scriptSetups.push(scriptSetup)
  return code
}
