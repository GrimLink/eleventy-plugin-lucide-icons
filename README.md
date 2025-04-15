# Eleventy Plugin - Lucide Icons

[![NPM version](https://img.shields.io/npm/v/@grimlink/eleventy-plugin-lucide-icons)](https://www.npmjs.org/package/@grimlink/eleventy-plugin-lucide-icons)
![license](https://img.shields.io/github/license/GrimLink/eleventy-plugin-lucide-icons)

This Eleventy plugin enables the inclusion of lucide-icons as inline SVG elements.

This enables you to use icons to enhance the visual appeal and usability of your website by adding them to your layouts with just a shortcode.

## Installation

First install this plugin with;

```bash
npm install @grimlink/eleventy-plugin-lucide-icons
```

> [!NOTE]
> This supports all 11ty versions starting from version 1

## How to use

Add to Configuration File (Usually .eleventy.js) the following;

```js
import eleventyLucideicons from "@grimlink/eleventy-plugin-lucide-icons";

export default function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyLucideicons,);
}
```

<details><summary>CommonJS syntax (11ty v1 and v2)</summary>

```js
const lucideIcons = require("@grimlink/eleventy-plugin-lucide-icons");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(lucideIcons);
};
```

</details>

Advanced usage:

```js
const lucideIcons = require("@grimlink/eleventy-plugin-lucide-icons");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(lucideIcons, {
    "class": "custom-class",
    "width": 24,
    "height": 24,
    "stroke": "currentColor",
    "stroke-width": 2
  });
};
```

## What does it do?

The plugin turns [11ty shortcodes](https://www.11ty.dev/docs/shortcodes/) like this:

```nunjucks
{% lucide "squirrel" %}
```

into HTML code like this:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="8" cy="21" r="1"/>
  <circle cx="19" cy="21" r="1"/>
  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
</svg>
```


## Adding options per icon

```nunjucks
{% lucide "shopping-cart", { "stroke": "#1A202C", "stroke-width": "3" } %}
```

### shorthand for width and height

```nunjucks
{% lucide "shopping-cart", { "size": "32" } %}
```
