import ESLintPluginFoo from "@zamiell/eslint-plugin-foo";
import { defineConfig } from "eslint/config";

export const myConfig = defineConfig({
  plugins: {
    foo: ESLintPluginFoo,
  },
});
