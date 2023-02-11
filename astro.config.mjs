import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/edge";
import { astroImageTools } from "astro-imagetools";

export default defineConfig({
  integrations: [tailwind(), react(), astroImageTools],
  output: "server",
  adapter: vercel({
    analytics: true,
  }),
});
