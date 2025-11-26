import markdownItCheckBox from "markdown-it-todo-lists";
import { defineConfig } from "vitepress";
import sidebar from "./sidebar";

const nav = [
  {
    text: "基础语法",
    link: "/base/",
  },
  {
    text: "无畏并发",
    link: "/concurrency/",
  },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Golang",
  description: "notebook of study rust",

  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:locale", content: "zh-CN" }],
    ["meta", { name: "og:site_name", content: "notebook" }],
  ],

  themeConfig: {
    nav,
    logo: "/logo.svg",
    sidebar,
    outline: "deep",

    search: {
      provider: "local",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/liaohui5",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present liaohui5",
    },
  },

  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    config: (md) => {
      md.use(markdownItCheckBox);
    },
  },

  vite: {
    optimizeDeps: {
      exclude: ["@nolebase/vitepress-plugin-enhanced-readabilities/client"],
    },
    ssr: {
      noExternal: ["@nolebase/vitepress-plugin-enhanced-readabilities"],
    },
  },
});
