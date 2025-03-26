import type { ReleaseConfig } from "sovendus-release-tool/types";

const releaseConfig: ReleaseConfig = {
  packages: [
    {
      directory: "./",
      updateDeps: true,
      test: true,
      lint: true,
      build: true,
      release: {
        version: "1.0.0",
      },
    },
  ],
};
export default releaseConfig;
