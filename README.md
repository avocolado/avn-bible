# Adult Visual Novel Bible

Adult Visual Novel Bible is a hub of documentation for AVN resources for both players and developers. It aims to create a place where information about AVNs are **public**, **accessible**, and **sustainable**. Right now the majority of helpful AVN content and tutorials are distributed amongst Reddit posts, Discords, private chats, blogs, YouTube, Google Drives, and random text files. AVN Bible seeks to preserve this knowledge in an accessible and searchable way, reducing the barrier for people to learn about playing and developing AVNs.

## How it works

AVN Bible [VitePress](https://vitepress.dev/) to generate the static website. While it can be customized with Vue, **no programming understanding is required to contribute**. All that needs to be done to contribute is editing a Markdown text file on GitHub and making a pull request. 

## Format

The root layout looks like this

- `index.md`
- `glossary.md`
- `resources.md`
- `/getting-started/*`
- `/daz/`
  - `/daz/resources.md`
- `/illusion/`
  - This services both Koikatsu and Honey Select games and resources.
  - `/illusion/installation.md`
  - `/illusion/resources.md`
- `/articles/*` 

### Linking videos or websites

If you'd like to add a link to a video tutorial or other websites, you should do add a link to them under `/resources`. If they are Daz, KK, or HS specific, please link them under `/daz/resources.md` or `/illusion/resources.md`. 

### Linking text documents

AVN Bibles seeks to preserve all text documents on the website itself to avoid dead hyperlinks in the case someone's Patreon gets shut down, Reddit gets deleted, Discord get nuked, etc. If you are linking a text document, please do the following:

1) Create a new markdown file for the text in `/articles/[unique-name-author].md`. We might have similar names in the future, so make sure we append the author's name afterwards. Example: `/articles/writing-slice-of-life-avocolado.md`.   
2) Copy all the text over to the new file you've created.
3) Add any images you might have to `/images/[file-name].ext`. Try to make these self-explanatory, short names like `koikatsu1.jpg` will be rejected and hyperlink them from your Markdown file. 
4) Proofread, spell, and add formatting to the file that you've added if it doesn't exist. Add a title, sub sections, and admonitions when and if possible to make the text more legible. Aim to create a legible and engaging visual and written document - not to preserve the word for word accuracy of the author. AVN Bible's goal is to serve the AVN community as a learning resource - not be a historical artifact.
5) Add a [footnote](https://www.markdownguide.org/extended-syntax/#footnotes) to the article with the original source link and cite the author.
6) Create a link to the text document either in `/resources.md` or wherever it's being referenced.

It may seem like a lot of work but once you do it once it's very straight forward!

## Testing

Contributing text documents is probably _a lot_ easier if you can test locally. If you're a developer it's as simple as cloning the repository and then running the following commands:

```
npm install
npm run dev
```

You should then see the website open on `localhost:5173`.

## Future

As of now, we should avoid linking people directly to sub-routes of this website. While the main host will stay the same, the format and routing is subject to change as the site grows and some of the routes may be subject to change as the page grows. 
