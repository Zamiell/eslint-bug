# ESLint types bug

This repository shows a type-related bug with the `defineConfig` function.

Steps to reproduce:

```sh
git clone git@github.com:Zamiell/eslint-bug.git
cd eslint-bug/packages/eslint-config-foo
npm ci
npx tsc
```

You should get a type error like this:

```txt
jnesta@LH7472 MINGW64 ~/Repositories/eslint-bug/packages/eslint-config-foo (main)
$ npx tsc
src/index.ts:6:5 - error TS2322: Type '{ meta: { name: string; version: string; }; rules: { "some-rule": RuleModule<never, [], unknown, RuleListener>; }; }' is not assignable to type 'Plugin'.
  Types of property 'rules' are incompatible.
    Type '{ "some-rule": RuleModule<never, [], unknown, RuleListener>; }' is not assignable to type 'Record<string, RuleDefinition<RuleDefinitionTypeOptions>>'.
      Property '"some-rule"' is incompatible with index signature.
        Type 'RuleModule<never, [], unknown, RuleListener>' is not assignable to type 'RuleDefinition<RuleDefinitionTypeOptions>'.
          Types of property 'create' are incompatible.
            Type '(context: Readonly<RuleContext<never, []>>) => RuleListener' is not assignable to type '(context: RuleContext<{ LangOptions: LanguageOptions; Code: SourceCode<{ LangOptions: LanguageOptions; RootNode: unknown; SyntaxElementWithLoc: unknown; ConfigNode: unknown; }>; RuleOptions: unknown[]; Node: unknown; MessageIds: string; }>) => RuleVisitor'.
              Types of parameters 'context' and 'context' are incompatible.
                Type 'RuleContext<{ LangOptions: LanguageOptions; Code: SourceCode<{ LangOptions: LanguageOptions; RootNode: unknown; SyntaxElementWithLoc: unknown; ConfigNode: unknown; }>; RuleOptions: unknown[]; Node: unknown; MessageIds: string; }>' is missing the following properties from type 'Readonly<RuleContext<never, []>>': getAncestors, getDeclaredVariables, getScope, markVariableAsUsed

6     foo: ESLintPluginFoo,
      ~~~


Found 1 error in src/index.ts:6
```

Thus, this proves that `ESLintUtils.RuleCreator` helper function is bugged with `defineConfig`.
