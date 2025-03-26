import type { BuildConfig } from "sovendus-builder";

const buildConfig: BuildConfig = {
  foldersToClean: ["dist"],
  filesToCompile: [
    {
      input: "src/html/index.html",
      output: "dist/index",
      options: {
        type: "vanilla",
        packageConfig: {
          isPackage: true,
          dtsEntryRoot: "src/scripts/vanilla",
          dtsInclude: ["src/scripts/vanilla/**/*"],
        },
      },
    },
  ],
};

export default buildConfig;
