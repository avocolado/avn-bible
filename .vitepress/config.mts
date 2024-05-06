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
        collapsed: true,
        items: [
          { text: "Glossary", link: "/glossary" },
          { text: "Resources", link: "/resources" },
        ],
      },
      {
        text: "Getting Started",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/getting-started/intro" },
          { text: "Art", link: "/getting-started/art" },
          {
            text: "Rendering Engine",
            link: "/getting-started/rendering-engine",
          },
          { text: "Game Engine", link: "/getting-started/game-engine" },
          { text: "Scope", link: "/getting-started/scope" },
          { text: "Writing", link: "/getting-started/writing" },
          { text: "H-Scenes", link: "/getting-started/h-scenes" },
          { text: "Music & SFX", link: "/getting-started/music-and-sfx" },
          { text: "Release", link: "/getting-started/release" },
        ],
      },
      {
        text: "Daz",
        collapsed: true,
        items: [{ text: "Resources", link: "/daz-resources" }],
      },
      {
        text: "Koikatsu/Honey Select (Illusion)",
        collapsed: true,
        items: [
          { text: "Installation", link: "/illusion-installation" },
          { text: "Resources", link: "/illusion-resources" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: {
          svg: `<svg width="36px" height="36px" viewBox="0 -4.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
          <g> <path d="M45.1355837,0 L45.1355837,246.35001 L0,246.35001 L0,0 L45.1355837,0 Z M163.657111,0 C214.65668,0 256,41.3433196 256,92.3428889 C256,143.342458 214.65668,184.685778 163.657111,184.685778 C112.657542,184.685778 71.3142222,143.342458 71.3142222,92.3428889 C71.3142222,41.3433196 112.657542,0 163.657111,0 Z" fill="#FF424D"> 
          </path> </g> </svg>`,
        },
        link: "https://patreon.com/avocolado",
        ariaLabel: "Patreon",
      },
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
