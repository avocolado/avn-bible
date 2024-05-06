# How to contribute to the AVN Bible

### Did you find a typo/incorrect definition?
- Open up a pull request that fixes the typo/definition and describe the changes if more than a few lines.

### Are you adding new content?

- For new glossary definitions, simply add the definition to the glossary.
- For new articles (guides, explanations, etc.), add it to `/articles/[article-name]`. Make sure the article name is unique and not generic! For example, use `daz-lighting-guide-[author-name]` instead of just `daz-lighting-guide`. There may be multiple of the same type of article.
  - Make sure articles reference the source material in the footnotes (Look up how to do this in Markdown if you're not sure, or reference an existing article). 
  - Stylize the article so that it isn't just one blob of text. If this requires editing the initial article, then so be it. The goal of this library is human legible and engaging content, not historical documentation.
  
We should always self-host images in `/images` and should be referenced as `/images/[image-name]` instead of `images/[image-name]`, as the latter is a relative link instead of an absolute path.

After you're ready, open a pull request and briefly describe the article.

### Other content

If you find an issue or there's other content you want to add that doesn't fit under an existing pattern, do not immediately open a pull request. Open an issue first so we can align on it!

Thank you,
Avocolado
