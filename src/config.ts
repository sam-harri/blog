// Color configuration now uses hex values directly

// IMPORTANT SET THOSE TWO VARIABLES:
// NUMBER ONE:
// SITE_URL is now read from environment variable PUBLIC_SITE_URL
// Set PUBLIC_SITE_URL in your .env file or deployment environment
// For development: PUBLIC_SITE_URL=http://localhost:4322
// For production: PUBLIC_SITE_URL=https://blog.samharrison.ca
export const SITE = import.meta.env.PUBLIC_SITE_URL || "http://localhost:4322";

// NUMBER TWO:
// if repo name is <your-github-username>.github.io set to '/'
// otherwise set to '/<your-repo-name>'
// For GitHub Pages with custom domain, use '/' in production, '/blog' in development
export const BASE = import.meta.env.PUBLIC_SITE_URL ? "/" : "/blog";

// MORE SETTINGS:

// will be used for the the title and meta tags and in the header (if SITE_NAME is left blank)
export const SITE_TITLE = "Sam Harrison — Blog";

// will be used in the meta tags (and for example shown in search results)
export const SITE_DESCRIPTION = "Welcome to my blog! I write about my experiences and opinions on software development, and other topics.";

// will be used as the icon in the header and the favicon
export const SITE_FAVICON = "/pagefind/favicon.svg";

// will be used in the footer as the name of the author (c) <YEAR> <NAME> - LICENSE
export const NAME = "Sam Harrison";

// will be used in the footer as the license of the content (e.g. "All right reserved" or "CC-BY-SA 4.0")
export const LICENSE = "MIT licensed.";

// will be used to identify your bluesky account, so that likes and comments can be shown on your posts
export const BLUESKY_IDENTIFIER = "";

export const SOURCE_LINK = 'https://github.com/sam-harri/blog';

// will be used to set the base color of the blog
export const BASE_COLOR = "#f1f8f5";

// will be used to set the accent color of the blog
export const ACCENT_COLOR = "#0b3d2e";

// will show all icons that are not empty in the footer as links
export const SOCIAL_LINKS: {
  FACEBOOK_URL?: string;
  TWITTER_URL?: string;
  GITHUB_URL?: string;
  INSTAGRAM_URL?: string;
  LINKEDIN_URL?: string;
  YOUTUBE_URL?: string;
  SUBSTACK_URL?: string;
  EMAIL?: string;
  BLUESKY_URL?: string;
  SHOW_RSS?: boolean;
} = {
  SHOW_RSS: false,
  GITHUB_URL: "https://github.com/sam-harri",
  EMAIL: "samharrison@cs.toronto.edu",
  LINKEDIN_URL: "https://www.linkedin.com/in/sam-harri/",
  BLUESKY_URL: "https://bsky.app/profile/sam-harri.bsky.social",
  TWITTER_URL: "https://x.com/samharrri",
};


// EVEN MORE SETTINGS:

// if true, will show theme toggle in header (otherwise theme is automatically detected and can't be changed by the readers)
export const MANUAL_DARK_MODE = true;

// if true, will enable the search functionality
export const SEARCH_ENABLED = true;

// if true, will show images in the posts
export const SHOW_IMAGES = true;

// will be used to set the number of posts per page
export const POSTS_PER_PAGE = 8;

// will be shown in the header, if left blank will instead show the SITE_TITLE
export const SITE_NAME = "";

// if true, will show the SITE_FAVICON in the header
export const SHOW_FAVICON_IN_HEADER = true;
