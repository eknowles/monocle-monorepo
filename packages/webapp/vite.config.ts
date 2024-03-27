import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr';

const child_process = require("child_process");
function git(command) {
  return child_process.execSync(`git ${command}`, { encoding: "utf8" }).trim();
}

const TEST_SERVER = "monocle.paris";
const GIT_VERSION = git("describe --always");
const GIT_AUTHOR_DATE = git("log -1 --format=%aI").split("\n").pop();

process.env.TEST_SERVER = TEST_SERVER;
process.env.GIT_VERSION = GIT_VERSION
process.env.GIT_AUTHOR_DATE = GIT_AUTHOR_DATE

// https://vitejs.dev/config/
export default ({mode}) => {
  return defineConfig({
    plugins: [svgr(), react(), tsconfigPaths()],
    build: {
      outDir: `dist/${mode}`
    }
  })
}
