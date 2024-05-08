import { AtRule, Container, PluginCreator } from "postcss";
import type { Config } from "tailwindcss";

interface VariantOptions {
  container: Container;
  separator: string;
}

interface PluginOptions {
  addVariant: Function;
  e: Function;
  postcss: typeof import('postcss');
}

const customPlugin: any = function (options: any) {
  const { addVariant, e, postcss } = options as PluginOptions;

  if (!addVariant || !e || !postcss) {
    console.warn('Warning: addVariant, e, and postcss are required for this plugin.');
    return;
  }

  addVariant('firefox', ({ container, separator }: VariantOptions) => {
    const isFirefoxRule: AtRule = postcss.atRule({
      name: '-moz-document',
      params: 'url-prefix()',
    });
    isFirefoxRule.append(container.nodes);
    container.append(isFirefoxRule);
    isFirefoxRule.walkRules((rule) => {
      rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
    });
  });
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [customPlugin],
  darkMode: 'class'
};
export default config;
