import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
//import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.node } 
  },
  tseslint.configs.recommended,
  eslintConfigPrettier,
  simpleImportSort.flatConfigs["eslint-plugin-simple-import-sort"],
  //pluginReact.configs.flat.recommended,
]);
