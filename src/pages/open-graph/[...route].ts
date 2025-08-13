import { OGImageRoute } from "astro-og-canvas";
import { ACCENT_COLOR, BASE_COLOR, SITE_DESCRIPTION, SITE_TITLE } from "../../config";
import { getBlogPosts } from "../../utils";

const posts = await getBlogPosts();

// turn posts into an object with slugs as keys, and title and description as values
// { slug: { title, description } }

const pages = posts.reduce(
  (acc, post) => {
    acc[post.id] = {
      title: post.data.customOGImage ? "" : post.data.title,
      description: post.data.customOGImage
        ? ""
        : ((post.data.shortDescription ?? post.data.description ?? "") + "\n\n" + SITE_TITLE),
      customOGImage: post.data.customOGImage?.replace("../..", "/src").replace('/src', './src'),
    };
    return acc;
  },
  {} as Record<
    string,
    { title: string; description: string; customOGImage?: string }
  >,
);

function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

// Define color palettes for hex values
const accentColor = {
  50: '#f1f8f5',
  100: '#e6f2ed',
  200: '#d1e8e0',
  300: '#b3d8c9',
  400: '#8cc4b0',
  500: '#66b393',
  600: '#4da681',
  700: '#33996f',
  800: '#1a8c5d',
  900: '#1a8c5d',
  950: '#0b3d2e',
};

const baseColor = {
  50: '#f1f8f5',
  100: '#e6f2ed',
  200: '#d1e8e0',
  300: '#b3d8c9',
  400: '#8cc4b0',
  500: '#66b393',
  600: '#4da681',
  700: '#33996f',
  800: '#1a8c5d',
  900: '#1a8c5d',
  950: '#0b3d2e',
};

export const { getStaticPaths, GET } = OGImageRoute({
  // Tell us the name of your dynamic route segment.
  // In this case it’s `route`, because the file is named `[...route].ts`.
  param: "route",

  // A collection of pages to generate images for.
  // The keys of this object are used to generate the path for that image.
  // In this example, we generate one image at `/open-graph/example.png`.
  pages: {
    main: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      useHero: false,
    },
    ...pages,
  },

  // For each page, this callback will be used to customize the OpenGraph image.
  getImageOptions: (_, page) => ({
    title: page.title,
    description: page.description,

    bgGradient: page.customOGImage ? undefined : [hexToRgb(baseColor[950]), hexToRgb(baseColor[950]), hexToRgb(accentColor[950])],

    bgImage: {
      path: page.customOGImage || "./src/assets/backgrounds/noise.png",
      fit: "cover",
    },
    border: page.customOGImage ? undefined : {
      color: hexToRgb(accentColor[600]),
  
      width: 8,
  
      side: "block-start",
    },
    font: {
      /** Font style for the page title. */
      title: {
        families: ["Inter"],
        color: hexToRgb(accentColor[500]),
        size: 80,
        weight: "SemiBold",
      },
      description: {
        families: ["Inter"],
        color: hexToRgb(baseColor[100]),
      },
    },
    padding: 80,
    fonts: ["./src/assets/fonts/InterVariable.ttf"],
  }),
});
