import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

const parseWebsiteEnv = (contents: string): Record<string, string> => {
  const env: Record<string, string> = {};

  contents.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      return;
    }

    const [key, ...rest] = trimmed.split("=");
    env[key.trim()] = rest.join("=").trim();
  });

  return env;
};

const websiteEnvPath = path.resolve(__dirname, "website.env");
const websiteEnv = fs.existsSync(websiteEnvPath)
  ? parseWebsiteEnv(fs.readFileSync(websiteEnvPath, "utf-8"))
  : {};

const websiteEnvDefine = Object.fromEntries(
  Object.entries(websiteEnv)
    .filter(([key]) => key.startsWith("VITE_"))
    .map(([key, value]) => [`import.meta.env.${key}`, JSON.stringify(value)]),
);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  define: websiteEnvDefine,
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
