---
layout: Post
title: F.E.A.R Api
description: Full GUI for the FEAR api allowing vendors to manage there ecommerce websites, based on Creative Tim's blk design.
date: '2024-04-22'
tags:
  - ReactJS
  - stripe
  - SCSS
logo:
  src: /logo.png
  alt: F.E.A.R admins
images:
  - src: /projects/project-fear-admin.png
    alt: Main Vendor Dashboard
    overlay:
      src: /projects/project-fear-charts.png
      alt: Control Panel Mobile
  - src: /projects/project-fear-admin.png
    alt: Custom Charts
  - src: /projects/project-fear-charts.png

attributes:
  - label: Duration
    value: 3 Weeks
  - label: Role
    value: NodeJS API Server
  - label: Design Method 
    value: RESTful API
  - label: Technology
    value: ExpressJS, NodeJS 
    ### Paragraphs
---
To create paragraphs, use a blank line to separate one or more lines of text like this:

First paragraph. I really like using Markdown.

Second paragraph. *Italic*, **bold**, ~~strikethrough~~, Emoji 😂 ⛺, and `monospace`. I think I'll use it to format all of my documents from now on.

---

### Headings

To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three (`<h3>`), use three number signs (e.g., `### My Header`).

# Heading level 1

## Heading level 2


<TipJar />

Code blocks can also be used inside the `<Wide />` component.

<Wide>

  ```js  {4-7} showLineNumbers
  import contact from './contact.js';

  // below 3 lines are highlighted
  const person = {
    name: 'Sara',
    age: 25,
  }

  let name = person.name;
  let age = person.age;

  // returns a promise
  let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected');
  });
  ```

</Wide>

### Code-Block

The Markdown syntax allows you to create code blocks by indenting lines by four spaces or one tab. If you find that inconvenient, try using fenced code blocks. To do that, you’ll use three backticks (```) on the lines before and after the code block. The best part? You don’t have to indent any lines!

  ```js  {4-7} showLineNumbers
  import contact from './contact.js';

  // below 3 lines are highlighted
  const person = {
    name: 'Sara',
    age: 25,
  }

  let name = person.name;
  let age = person.age;

  // returns a promise
  let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected');
  });