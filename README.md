# Eleventy Plugin - Sass

[![NPM version](https://img.shields.io/npm/v/@grimlink/eleventy-plugin-sass)](https://www.npmjs.org/package/@grimlink/eleventy-plugin-sass)
![license](https://img.shields.io/github/license/GrimLink/eleventy-plugin-sass)

Simple 11ty config wrapper, for running Sass directly as custom template.

## Installation

This eleventy plugin requires;

- Eleventy v1.0.0 or higher
- Sass (Dart Sass) v1.45.0 or higher

First install this plugin with;

```bash
npm install @grimlink/eleventy-plugin-sass
```

Second install Sass;

```bash
npm install sass
```

> **Note** We offer the freedom to pick your own Sass version.
>
> This allows you to update the Sass version,
> without needing to rely on this plugin for that.

## How to use

Add to Configuration File (Usually .eleventy.js) the following;

```js
const eleventySass = require("@grimlink/eleventy-plugin-sass");
const sass = require("sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass, { sass });
};
```

You need to pass sass as an option,
But besides that, thats pretty much it.

Now any SCSS files,
that don't start with a underscore,
will compile to CSS in de output directory.

### Options

There are off course options to tweak to your preference.

| option       | Default          | Description                        |
| ------------ | ---------------- | ---------------------------------- |
| sass         |                  | the sass compiler to use           |
| outputPath   | ""               | Output path for your CSS file(s)   |
| outputStyle  | "expanded"       | Options are expanded or compressed |
| includePaths | ["node_modules"] | List of extra folders to include   |
| sourceMap    | false            | If you want to use source maps     |

If `outputPath` is empty,
this plugin will use the default inputPath as the outputPath.

If you want to force this to for example `_site/css`,
use `outputPath = "css"` as value.
