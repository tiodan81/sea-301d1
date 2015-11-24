# Assignment for Class 1 - jQuery and the DOM

## Welcome to your new blog!

- You will create a static blog site, to represent your personal online presence.
- Please use the included file: [blogArticles.js](blogArticles.js), that adds an array of ready-to-use blog posts to a `blog` JS object (that you will have to create).

## User Stories
Let these user stories guide your development:
 1. As a developer, I want my site to use valid and semantic markup, so that employers will love me.
 - As a reader, I want the blog to show most recent articles on top so that I can easily read the latest.
 - As a reader, I want relative timestamps to give me a idea of how many days ago something was written.
 - As an author, I want my name linked to my site, so that readers can learn more about me.
 - As a reader, I want the site to look reasonable, so that I can read it on any device.

## Technical Requirements and Grading Rubric

  - Use good Object Oriented code: Create a `blog` object, and a constructor function for articles.
  - Leave as little in the `window` (global) namespace as possible: attach functions to objects, etc.
  - Create the markup for an example Article in the DOM, then use jQuery to clone that for each article.
  - Your Article prototype should have a `.toHtml()` function that adds new data to the DOM.
  - Add basic styles: a css reset, content in a single centered column, reasonable margins, etc.
  - Your blog should end up looking [something like this](http://hijk.it/image/1l402M1Y0q3K/Screen%20Shot%202015-11-23%20at%2012.19.46%20PM.png).
