const { spawnSync } = require("node:child_process");

const result = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
  },
});

process.exit(result.status ?? 1);
