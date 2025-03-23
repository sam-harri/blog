import type { AccentColor, BaseColor } from "./colors";

// if deployed to github pages, set to https://<your-github-username>.github.io/
export const SITE = "https://flo-bit.dev";

// if deployed to github pages, set to '/<your-repo-name>'
// EXCEPT if repo name is <your-github-username>.github.io
// in that case set to '/'
export const BASE = "/blog-template";

// will be used for the the title and meta tags and in the header (if SITE_NAME is left blank)
export const SITE_TITLE = "Blog template";

// will be used in the meta tags (and for example shown in search results)
export const SITE_DESCRIPTION = "Welcome to my website!";

// will be used as the icon in the header and the favicon
export const SITE_FAVICON = "🙃";

// will be used in the footer as the name of the author (c) <YEAR> <NAME> - LICENSE
export const NAME = "flo-bit";

// will be used in the footer as the license of the content (e.g. "All right reserved" or "CC-BY-SA 4.0")
export const LICENSE = "All rights reserved.";

// will be used to identify your bluesky account, so that likes and comments can be shown on your posts
export const BLUESKY_IDENTIFIER = "flo-bit.dev";

// will be used to set the base color of the blog
export const BASE_COLOR: BaseColor = "stone";

// will be used to set the accent color of the blog
export const ACCENT_COLOR: AccentColor = "rose";

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
  SHOW_RSS: true,
  FACEBOOK_URL: "https://www.facebook.com/flo-bit.dev",
  TWITTER_URL: "https://twitter.com/flo_bit",
  GITHUB_URL: "https://github.com/flo-bit",
  INSTAGRAM_URL: "https://www.instagram.com/flo_bit",
};
// if true, will show theme toggle in header (otherwise theme is automatically detected and can't be changed by the readers)
export const MANUAL_DARK_MODE = true;

// if true, will enable the search functionality
export const SEARCH_ENABLED = true;

// if true, will show images in the posts
export const SHOW_IMAGES = true;

// will be used to set the number of posts per page
export const POSTS_PER_PAGE = 5;

// will be shown in the header, if left blank will instead show the SITE_TITLE
export const SITE_NAME = "";

// if true, will show the SITE_FAVICON in the header
export const SHOW_FAVICON_IN_HEADER = true;
