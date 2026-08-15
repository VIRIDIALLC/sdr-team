import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

/**
 * Keeps src/generated/pipeline.json in sync with prospects/ while the dev server runs,
 * so the board reflects agent commits without a restart.
 */
function pipelineData(): Plugin {
  const repoRoot = resolve(__dirname, '..')
  const prospectsDir = resolve(repoRoot, 'prospects')
  let rebuild: () => void = () => {}

  return {
    name: 'sdr-pipeline-data',
    async buildStart() {
      const { writeSnapshot } = await import('./scripts/build-data.mjs')
      rebuild = () => {
        try {
          const snapshot = writeSnapshot()
          console.log(`[pipeline] refreshed ${snapshot.prospectCount} prospects`)
        } catch (error) {
          console.error('[pipeline] rebuild failed:', error)
        }
      }
      rebuild()
    },
    configureServer(server) {
      server.watcher.add(prospectsDir)
      const onChange = (path: string) => {
        if (path.startsWith(prospectsDir) && path.endsWith('.md')) rebuild()
      }
      server.watcher.on('add', onChange)
      server.watcher.on('change', onChange)
      server.watcher.on('unlink', onChange)
    },
  }
}

export default defineConfig({
  plugins: [pipelineData(), react()],
  server: {
    port: 5173,
    // Markdown lives outside dashboard/; allow the watcher to reach it.
    fs: { allow: [resolve(__dirname, '..')] },
  },
})
