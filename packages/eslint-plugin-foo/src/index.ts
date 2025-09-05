import { someRule } from "./some-rule.js";

const plugin = {
  meta: {
    name: "eslint-plugin-foo",
    version: "0.0.1",
  },
  rules: {
    "some-rule": someRule,
  },
};

export default plugin;
