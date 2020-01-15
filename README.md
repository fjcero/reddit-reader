# Reddit Reader

## Dependencies

- React
- Grommet v2
- Styled Components
- React Redux + Redux Persit for state management and restoration
- React Springs for animations

## Requirements

- [x] Responsive design
- [x] Support split layout (left side: all posts / right side: detail post)
- [x] Mark as read
- [x] App state-preservation/restoration
- [x] Indicator of unread/read post (updated status, after post it’s selected)
- [x] Dismiss Post Button (remove the cell from list. Animations required)
- [x] Dismiss All Button (remove all posts. Animations required)
- [x] Pagination support
- [ ] Hide Sidebar
- [ ] Loading
- [ ] Saving pictures in the picture gallery

## What to show

```
- Title (at its full length, so take this into account when sizing your cells)
- Author
- entry date, following a format like “x hours ago” 
- A thumbnail for those who have a picture.
- Number of comments
- Unread status
```

## Methodology

1. Created app with `create-react-app` boilerplate
2. Added configuration files (`.prettierrc` and `.nvmrc`)
3. Added all the dependencies
4. Create basic components for the views
5. Fetch Data with Reddit JSON API using plain `fetch`
6. Styled Sidebar
7. Connect data to components using basic state. Will later be replaced by Redux.
8. Styled Sidebar > List Item
9. Styled Main Content 
10. Add support to Redux
11. Connect all the components to Redux
12. Refactor components: cleanup code

## Reddit API

### Posts

The posts can be fetched from `https://www.reddit.com/top.json`

The possible parameters are:

| *Param*              | *Description*                                                   |
| -------------------- | --------------------------------------------------------------- |
| `t`                  | one of (hour, day, week, month, year, all)                      |
| `after`              | fullname of a thing                                             |
| `before`             | fullname of a thing                                             |
| `count`              | a positive integer (default: 0)                                 |
| `include_categories` | boolean value                                                   |
| `limit`              | the maximum number of items desired (default: 25, maximum: 100) |
| `show`               | (optional) the string all                                       |
| `sr_detail`          | (optional) expand subreddits                                    |

> Reference: https://www.reddit.com/dev/api/#GET_top

### Unique ID

A fullname is a combination of a thing's type (e.g. Link) and its unique ID which forms a compact encoding of a globally unique ID on reddit.

Fullnames start with the type prefix for the object's type, followed by the thing's unique ID in base 36. For example, `t3_15bfi0`

> Reference: https://www.reddit.com/dev/api/#fullnames

