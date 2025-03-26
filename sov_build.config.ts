import type { BuildConfig } from "sovendus-builder";
import { viteSingleFile } from "vite-plugin-singlefile";

const buildConfig: BuildConfig = {
  foldersToClean: ["dist"],
  filesOrFoldersToCopy: [
    {
      input: "src/assets",
      output: "dist",
    },
  ],
  filesToCompile: [
    {
      input: "src/index.html",
      output: "dist/html/index",
      options: {
        type: "react-tailwind",
        inlineCss: false,

        otherOptions: {
          plugins: [
            //     viteLegacyPlugin({
            //       targets: ["ie >= 11"],
            //     }),
            viteSingleFile(),
          ],
          root: "./src",
        },
        outputOptions: {
          entryFileNames: undefined,
          assetFileNames: undefined,
          exports: undefined,
          format: undefined,
        },
        rollupOptions: {
          input: {
            main: "src/index.html",
          },
        },
      },
    },
  ],
  foldersToZip: [
    {
      input: "dist/html",
      output: "dist/html.zip",
    },
  ],
};

export default buildConfig;
