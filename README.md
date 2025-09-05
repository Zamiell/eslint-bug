# ESLint types bug

This repository shows a type-related bug with the `defineConfig` function.

Steps to reproduce:

```sh
git clone git@github.com:Zamiell/test.git
cd test
npm ci
cd packages/eslint-config-foo
npx tsc
```
