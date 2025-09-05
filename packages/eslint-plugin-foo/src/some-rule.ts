import { ESLintUtils } from "@typescript-eslint/utils";

/** @see https://typescript-eslint.io/developers/custom-rules#extra-rule-docs-types */
const createRule = ESLintUtils.RuleCreator(
  (ruleName) => `https://my-website.com/rules/${ruleName}`
);

export const someRule = createRule({
  name: "some-rule",
  meta: {
    type: "problem",
    docs: {
      description: "something",
    },
    schema: [],
    messages: {},
  },
  defaultOptions: [],

  create(context) {
    return {};
  },
});
