
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Remplace 'musab01k.github.io' par le nom exact de ton repo si ce n'est pas la racine
export default defineConfig({
  base: '/musab01k.github.io/',  // <-- Ajoute cette ligne
  vite: {
    plugins: [tailwindcss()],
  },
});
