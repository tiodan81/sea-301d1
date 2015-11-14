# Assignment for Class 2 - jQuery and Events

Today we will work on a way to filter the view.  We will add the ability to select articles by category or author name.

We will use jQuery events to make this happen.

## User Stories for Class 2
  - As a reader, I want articles truncated to the first paragraph so that I can easily scroll though the whole list.
  - As a reader, I want to click the "Read On" button so that I can see the entire article.
  - As an author, I want my articles filtered by name so that readers can find all my posts.
  - As a reader, I want articles filterable by category so that I can read things that interest me.
  - As the creator, I want the About nav to act as a tab, so my story is revealed FAST.

## Technical Requirements and Grading Rubric
  - Use event delegation whenever appropriate,
  - Make sure you aren't showing articles that are unpublished ("draft").
  - Add your filters to the Nav section.
  - Factor out any helper functions to a util.js file.
  - Do as much work as you can with advanced selectors, rather than littering your markup with classes and ids.
  - When one filter is selected, it should reset the other filter (eg: it should not AND them).
