import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    target: "#svelte",
    adapter: adapter({
      pages: "build", // path to public directory
      assets: "build", // path to public directory
      fallback: null,
    }),
  },
};

export default config;
