import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AVN Bible",
  description: "The hub for adult visual novels",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "General",
        collapsed: false,
        items: [
          { text: "Glossary", link: "/glossary" },
          { text: "Resources", link: "/resources" },
        ],
      },

      {
        text: "Getting Started",
        collapsed: false,
        items: [
          { text: "Introduction", link: "/getting-started" },
          { text: "Art", link: "/art" },
          { text: "Rendering Engine", link: "/rendering-engine" },
          { text: "Game Engine", link: "/game-engine" },
          { text: "Scope", link: "/scope" },
          { text: "Writing", link: "/writing" },
          { text: "H-Scenes", link: "/h-scenes" },
          { text: "Music & SFX", link: "/music-and-sfx" },
          { text: "Release", link: "/release" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/avocolado/avn-bible" },
    ],
    footer: {
      message: "Created by Avocolado and friends",
    },
    editLink: {
      pattern: "https://github.com/avocolado/avn-bible/edit/master/:path",
    },
  },
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
});
