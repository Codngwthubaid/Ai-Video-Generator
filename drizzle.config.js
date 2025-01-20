import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://accounts:TmXJd3cVL1lP@ep-autumn-shape-a86q4uek.eastus2.azure.neon.tech/AI-VIDEO-GENERATOR?sslmode=require",
  },
});
