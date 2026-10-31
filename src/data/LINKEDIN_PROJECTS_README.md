# LinkedIn project list

Add future LinkedIn project posts in `src/data/linkedinProjects.js`.
The Projects page reads this array and renders one card per entry.

Each entry should contain:
- `id`
- `postUrl`
- `title`
- `category`
- `description`
- `stack` (array)
- `highlights` (array)

LinkedIn post URLs are included as source links. LinkedIn generally blocks unauthenticated browser-side scraping and cross-origin requests, so adding only a URL cannot reliably extract the full post content automatically. For each new URL, review the post once and add its verified title, description, stack and highlights in this same file. The React page then updates automatically from that file.
