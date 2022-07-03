# Svelte Markdown Blog Template

A Markdown-based blog template developed in Svelte.

## Setup

Set the `base` property in `svelte.config.js` to the repository name.

```javascript
const config = {
    kit: {
        paths: {
            base: '/svelte-markdown-blog-template' // Change to the your repository name.
        }
    }
};
```

## Write Post

The markdown files in `contents` are recognized as posts.

This repository has `sample.md` at the initially.  
You can delete it to create your own posts.

Metadata is always required at the beginning of the markdown file.

```markdown
---
title: Sample Post
author: Uegaki
date: 2022-07-03
description: A sample post introducing some of the features. 😀
---
```

## Publish

You can easily publish using [Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages).

This repository has a Github Workflow for that, just publish the `gh-pages` branch.

```yaml
name: github pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: 'npm'

      - name: Install
        run: npm i

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## Development

You can free to develop in any environment you like.

```shell
npm run dev
```

- build

```shell
npm run build
```
