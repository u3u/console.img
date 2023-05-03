import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: { resolve: true },
  entry: ['src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  shims: true,
})
