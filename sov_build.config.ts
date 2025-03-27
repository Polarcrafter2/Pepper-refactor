import type { BuildConfig } from "sovendus-builder";

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
            // viteLegacyPlugin({
            //   targets: ["ie >= 11"],
            // }),
            // viteSingleFile(),
          ],
          root: "./src",
          resolve: {
            alias: {
              "@": "./src",
            },
          },
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
          external: ["fsevents"],
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
