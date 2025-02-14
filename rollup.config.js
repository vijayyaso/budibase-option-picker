import svelte from "rollup-plugin-svelte"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import { terser } from "rollup-plugin-terser"

export default {
  input: "src/Component.svelte",
  output: {
    format: "es",
    file: "dist/plugin.min.js",
    name: "component",
  },
  plugins: [
    svelte({
      compilerOptions: {
        css: true,
      },
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
    terser(),
  ],
}
