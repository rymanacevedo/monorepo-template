import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

import { reactRouterHonoServer } from "react-router-hono-server/dev";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouterHonoServer({ runtime: "bun" }),
    reactRouter(),
    tsconfigPaths(),
  ],
});